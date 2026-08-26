import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import Order from "@/models/Order";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    // -----------------------------
    // 1. Validate payment response
    // -----------------------------

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing payment details.",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // 2. Get Razorpay secret
    // -----------------------------

    const secret = process.env.RAZORPAY_KEY_SECRET;

    if (!secret) {
      console.error(
        "RAZORPAY_KEY_SECRET is not configured"
      );

      return NextResponse.json(
        {
          success: false,
          message: "Payment configuration error.",
        },
        { status: 500 }
      );
    }

    // -----------------------------
    // 3. Find order in database
    // -----------------------------

    const dbOrder = await Order.findOne({
      razorpay_orderId: razorpay_order_id,
    });

    if (!dbOrder) {
      return NextResponse.json(
        {
          success: false,
          message: "Order not found.",
        },
        { status: 404 }
      );
    }

    // -----------------------------
    // 4. Prevent duplicate verification
    // -----------------------------

    if (dbOrder.paymentStatus === "paid") {
      return NextResponse.json({
        success: true,
        message: "Payment already verified.",
        orderId: razorpay_order_id,
      });
    }

    // -----------------------------
    // 5. Generate expected signature
    // -----------------------------

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(
        `${razorpay_order_id}|${razorpay_payment_id}`
      )
      .digest("hex");

    // -----------------------------
    // 6. Compare signatures
    // -----------------------------

    const generatedBuffer = Buffer.from(
      generatedSignature,
      "hex"
    );

    const receivedBuffer = Buffer.from(
      razorpay_signature,
      "hex"
    );

    // timingSafeEqual requires
    // both buffers to have the same length

    if (
      generatedBuffer.length !== receivedBuffer.length
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Payment verification failed. Invalid signature.",
        },
        { status: 400 }
      );
    }

    const isValid = crypto.timingSafeEqual(
      generatedBuffer,
      receivedBuffer
    );

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Payment verification failed. Invalid signature.",
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // 7. Update order
    // -----------------------------

    dbOrder.razorpay_PaymentId =
      razorpay_payment_id;

    dbOrder.razorpay_paymentSignature =
      razorpay_signature;

    dbOrder.paymentStatus = "paid";
    dbOrder.status = "completed";

    await User.updateOne(
  { _id: dbOrder.userId },
  {
    $addToSet: {
      books: dbOrder.bookId ,
    },
  }
);

    await dbOrder.save();

    // -----------------------------
    // 8. Return success
    // -----------------------------

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully.",
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
    });

  } catch (error) {
    console.error(
      "Payment Verification Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Internal server error during payment verification.",
      },
      { status: 500 }
    );
  }
}