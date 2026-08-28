import { NextResponse } from "next/server";

import { connectDB } from "@/lib/db";

import User from "@/models/User";
import Book from "@/models/book";
import Order from "@/models/Order";

import { Role } from "@/models/User";

export async function GET(req: Request) {
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

    if (!user || user.role !== Role.ADMIN) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

  

    const [
      totalUser,
      totalSuccessfulTransaction,
      totalFailedTransaction,
      totalTransaction,
      salesResult,
      books,
      transactions,
    ] = await Promise.all([
      // Total users excluding admins
      User.countDocuments({
        role: { $ne: Role.ADMIN },
      }),

      // Successful transactions
      Order.countDocuments({
        paymentStatus: "paid",
      }),

      // Failed transactions
      // Everything that is NOT paid
      Order.countDocuments({
        paymentStatus: { $ne: "paid" },
      }),

      // Total transactions
      Order.countDocuments(),

      // Total sales
      Order.aggregate([
        {
          $match: {
            paymentStatus: "paid",
          },
        },
        {
          $group: {
            _id: null,
            total: {
              $sum: "$amount",
            },
          },
        },
      ]),

      // Books
      Book.find().lean(),

      // All transactions
      Order.aggregate([
  // Join User
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user",
    },
  },

  // Join Book
  {
    $lookup: {
      from: "books",
      localField: "bookId",
      foreignField: "_id",
      as: "book",
    },
  },

  // Convert arrays to objects
  {
    $unwind: {
      path: "$user",
      preserveNullAndEmptyArrays: true,
    },
  },

  {
    $unwind: {
      path: "$book",
      preserveNullAndEmptyArrays: true,
    },
  },

  // Return ONLY what admin UI needs
  {
    $project: {
      _id: 0,

      orderId: "$razorpay_orderId",

      transactionId: {
        $ifNull: ["$razorpay_PaymentId", null],
      },

      name: {
        $ifNull: ["$user.name", "Unknown"],
      },

      number: {
        $ifNull: ["$user.number", "N/A"],
      },

      bookTitle: {
        $ifNull: ["$book.name", "Unknown"],
      },

      date :{
        $ifNull : ["$createdAt","Unknown"]
      },
      amount : 1,

      paymentStatus: 1,
    },
  },

  // Latest transactions first
  {
    $sort: {
      createdAt: -1,
    },
  },
])
    ]);


    const totalSales = salesResult[0]?.total ?? 0;

   

    return NextResponse.json({
      success: true,

      data: {
        totalSales,
        totalSuccessfulTransaction,
        totalFailedTransaction,
        totalTransaction,
        totalUser,
        books,
        transactions,
      },
    });
  } catch (error) {
    console.error("Admin stats error:", error);

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