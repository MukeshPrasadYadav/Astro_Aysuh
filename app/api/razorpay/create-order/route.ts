import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import bcrypt from "bcrypt";
import Session from "@/models/Session";
import Book from "@/models/book";
import Order from "@/models/Order";
import mongoose from "mongoose";



const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let { bookId,name,number } = body;
    
    if(bookId){
      bookId = new mongoose.Types.ObjectId(bookId);
    }


    if(!bookId) {
        return NextResponse.json({success : false, message : "Provide book id."},{status : 401});
    }
    if(!name || !number) {
        return NextResponse.json({success : false, message : "User details not provided."},{status : 401});
    }

    // check user exist or not 
    let user = await User.findOne({number}).lean();

    if(!user){
        let hashedPassword = await bcrypt.hash(number , 10);
        user = await User.create({name,number,password : hashedPassword})

          const sessionId = crypto.randomUUID();
            await Session.create({
              sessionId,
              userId: user._id,
              expiresAt: new Date(Date.now() + 1 * 24 * 60 * 30 * 1000),
            });
    }

    const book = await Book.findOne({_id : bookId});
    if(!book || book === null){
        return NextResponse.json({success : false, message : "No book found."},{status : 401});
    }


  

    const order = await razorpay.orders.create({
         amount: Math.round(book.price * 100),
      currency : "INR",
      receipt: `receipt_${book.name}_${Date.now()}`
    });

    const dbOrder = await Order.create({userId: user._id,
       bookId, amount: book?.price, status: "pending", razorpay_orderId: order.id, paymentStatus: "created"});

       await User.updateOne(
  { _id: user._id },
  {
    $addToSet: {
      transactions: dbOrder._id,
    },
  }
);

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error: any) {
    console.error("Razorpay Create Order Error:", error);

    // Handle Razorpay specific errors
    if (error?.error?.description) {
      return NextResponse.json(
        {
          success: false,
          message: error.error.description,
          code: error.error.code,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create order. Please try again later.",
      },
      { status: 500 }
    );
  }
}