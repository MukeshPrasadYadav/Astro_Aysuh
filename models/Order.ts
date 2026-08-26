import mongoose, { Schema, ObjectId } from "mongoose";

export interface IOrder {
  userId: ObjectId;
  bookId: ObjectId;
  amount: number;

  status:
    | "pending"
    | "processing"
    | "completed"
    | "cancelled";

  razorpay_orderId: string;
  razorpay_PaymentId?: string | null;
  razorpay_paymentSignature?: string | null;

  paymentStatus:
    | "created"
    | "authorized"
    | "captured"
    | "failed"
    | "refunded"
    | "paid"
}

const OrderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: [true, "No user found."],
    },

    bookId: {
      type: Schema.Types.ObjectId,
      required: [true, "No book found."],
    },

    amount: {
      type: Number,
      required: [true, "No amount provided."],
    },

    status: {
      type: String,
      enum: [
        "pending",
        "processing",
        "completed",
        "cancelled",
      ],
      default: "pending",
    },

    razorpay_orderId: {
      type: String,
      required: [true, "No Razorpay order ID provided."],
    },

    razorpay_PaymentId: {
      type: String,
      default: null,
    },

    razorpay_paymentSignature: {
      type: String,
      default: null,
    },

    paymentStatus: {
      type: String,
      enum: [
        "created",
        "authorized",
        "captured",
        "failed",
        "refunded",
        "paid"
      ],
      default: "created",
    },
  },
  {
    timestamps: true,
  }
);

const Order =
  mongoose.models.Order ||
  mongoose.model<IOrder>("Order", OrderSchema);

export default Order;