import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import Order from "@/models/Order";
import User from "@/models/User";
import mongoose from "mongoose";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

const CHECK_COOLDOWN_MS = 5 * 60 * 1000;

export async function POST(req: NextRequest) {
  try {
    // 1. Identify the user from the header
    const userId = req.headers.get("x-user-id");

    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json({ success: false, message: "User not found." }, { status: 401 });
    }

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found." }, { status: 404 });
    }

    // 2. Cooldown lives on the user
    if (user.lastPaymentCheckAt && Date.now() - user.lastPaymentCheckAt.getTime() < CHECK_COOLDOWN_MS) {
      const retryAfterMs = CHECK_COOLDOWN_MS - (Date.now() - user.lastPaymentCheckAt.getTime());
      return NextResponse.json(
        {
          success: false,
          message: "You checked recently — please try again in a few minutes.",
          retryAfterMs,
        },
        { status: 429 }
      );
    }

    // 3. Find all of this user's orders that aren't resolved yet
    const pendingOrders = await Order.find({
      userId: user._id,
      paymentStatus: { $nin: ["paid", "failed"] },
    });

    user.lastPaymentCheckAt = new Date();
    await user.save();

    if (pendingOrders.length === 0) {
      return NextResponse.json({ success: true, updated: [], message: "No pending orders." });
    }

    const updated: { orderId: string; paymentStatus: string }[] = [];
    const newlyPaidBookIds: string[] = [];

    for (const order of pendingOrders) {
      try {
        const payments = await razorpay.orders.fetchPayments(order.razorpay_orderId);
        const captured = payments.items.find((p: any) => p.status === "captured");

        if (captured) {
          order.razorpay_PaymentId = captured.id;
          order.paymentStatus = "paid";
          order.status = "completed";
          await order.save();

          newlyPaidBookIds.push(order.bookId.toString());
          updated.push({ orderId: order._id.toString(), paymentStatus: "paid" });
          continue;
        }

        const allFailed =
          payments.items.length > 0 && payments.items.every((p: any) => p.status === "failed");

        if (allFailed) {
          order.paymentStatus = "failed";
          order.status = "failed";
          await order.save();
          updated.push({ orderId: order._id.toString(), paymentStatus: "failed" });
        } else {
          updated.push({ orderId: order._id.toString(), paymentStatus: order.paymentStatus });
        }
      } catch (innerErr) {
        console.error(`Check failed for order ${order.razorpay_orderId}`, innerErr);
        updated.push({ orderId: order._id.toString(), paymentStatus: order.paymentStatus });
      }
    }

    if (newlyPaidBookIds.length > 0) {
      await User.updateOne(
        { _id: user._id },
        { $addToSet: { books: { $each: newlyPaidBookIds } } }
      );
    }

    return NextResponse.json({ success: true, updated });
  } catch (error) {
    console.error("check-payment-status error:", error);
    return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
  }
}