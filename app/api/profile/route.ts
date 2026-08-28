import { connectDB } from "@/lib/db";
import Order from "@/models/Order";
import User, { Role } from "@/models/User";
import { NextResponse } from "next/server";


export async function GET(req: Request){

    try {

        await connectDB();



    const userId = req.headers.get("x-user-id");

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }


    const user = await User.findById(userId).lean();

    if (!user || user.role !== Role.USER) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const orders = await Order.aggregate([
  {
    $match: {
      userId: user._id,
      paymentStatus: "paid",
    },
  },

  {
    $lookup: {
      from: "books",
      localField: "bookId",
      foreignField: "_id",
      as: "book",
    },
  },

  {
    $unwind: "$book",
  },

  {
    $project: {
      _id: 1,
      name: "$book.name",
      amount: 1,
      createdAt: 1,
      transactionId: "$razorpay_PaymentId",
    },
  },
]);

    return NextResponse.json({success : true, data : orders});


        
    } catch (error) {
        
        return NextResponse.json(
              {
                success: false,
                message: "Something went wrong",
              },
              {
                status: 500,
              }
            );
    }
}