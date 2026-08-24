import { NextRequest, NextResponse } from "next/server";
// import connectDB from "@/lib/mongodb";
// import Book from "@/models/Book";
// import { uploadToCloudinary } from "@/lib/cloudinary";
import { connectDB } from "@/lib/db";
import Book from "@/models/book";
import { uploadToCloudinary } from "@/lib/uploadCloudinary";
import { testCloudinary } from "@/lib/cloudinary";


export async function POST(req: NextRequest) {
  try {
    await connectDB();
   

    const formData = await req.formData();

const name = formData.get("name") as string;
const price = Number(formData.get("price"));
const priceToShow = Number(formData.get("priceToShow"));

const coverPicture = formData.get("coverPicture") as File;
const pdf = formData.get("pdf") as File;

    if (!name || !price || !priceToShow || !coverPicture || !pdf) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    console.log("price",price);
    console.log("priceTo show",priceToShow);
    console.log("cover picture",coverPicture)
    console.log("pdf",pdf)
    console.log("name",name)

    // Upload cover
     await testCloudinary();

    
    const coverUrl = await uploadToCloudinary(
      coverPicture,
      "books/covers"
    );

    console.log("coverUrl",coverUrl)

    // Upload PDF
    // const pdfUrl = await uploadToCloudinary(
    //   pdf,
    //   "books/pdfs"
    // );
    // console.log("pdfUrl",pdfUrl)

    // Save in DB
    const book = await Book.create({
      name,
      price: Number(price),
      priceToShow: Number(priceToShow),
      coverPicture: coverUrl,
      pdf: pdfUrl,
    });

    return NextResponse.json(
      {
        message: "Book uploaded successfully",
        book,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to upload book" },
      { status: 500 }
    );
  }
}