import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/db";
import Book from "@/models/book";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    // Read JSON instead of FormData
    const body = await req.json();

    const {
      name,
      price,
      priceToShow,
      coverPicture,
      coverPicturePath,
      pdfPath,
    } = body;

    // Validation
    if (
      !name ||
      !price ||
      !priceToShow ||
      !coverPicture ||
      !coverPicturePath ||
      !pdfPath
    ) {
      return NextResponse.json(
        {
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    console.log("name:", name);
    console.log("price:", price);
    console.log("priceToShow:", priceToShow);
    console.log("coverPicture:", coverPicture);
    console.log("coverPicturePath:", coverPicturePath);
    console.log("pdfPath:", pdfPath);

    // Save only the URLs/paths in MongoDB
    const book = await Book.create({
      name,
      price: Number(price),
      priceToShow: Number(priceToShow),
      coverImage : coverPicturePath,
      pdfPublicId : pdfPath
    });

    return NextResponse.json(
      {
        message: "Book uploaded successfully",
        book,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Book API error:", error);

    return NextResponse.json(
      {
        message: "Failed to upload book",
      },
      { status: 500 }
    );
  }
}