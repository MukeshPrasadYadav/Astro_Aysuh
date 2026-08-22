import mongoose, { Schema, Document } from "mongoose";

export interface IBook extends Document {
  name: string;
  price : number;
  priceToShow : number;
}

const BookSchema = new Schema<IBook>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    price :{
        type : Number,
        required : true,
        min : 0
    },
    priceToShow : {
        type : Number,
        required : true,
        min : 0
    }
  },
  {
    timestamps: true,
  }
);

const Book =
  mongoose.models.Book ||
  mongoose.model<IBook>("Book", BookSchema);

export default Book;