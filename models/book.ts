import mongoose, { Schema, Document } from "mongoose";

export interface IBook extends Document {
  name: string;
  price : number;
  priceToShow : number;
  coverImage : string;
  pdfPublicId : string;
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
    },
    coverImage :{
      type : String,
      required : true
    },
    pdfPublicId :{
      type : String,
      required : true
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