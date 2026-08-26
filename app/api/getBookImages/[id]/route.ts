import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Book from "@/models/book";
import { supabase } from "@/lib/superbaseconfig";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await connectDB();

    let book = await Book.findById(id).lean();

    if (!book) {
      return NextResponse.json(
        { success: false, message: "Book not found" },
        { status: 404 }
      );
    }

    const {data} = supabase.storage.from("Images").getPublicUrl(book?.coverImage);
    const  image = data.publicUrl;

        book = {
        ...book,
        coverImage : image
    }

    return NextResponse.json({
      success: true,
      book,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch book image" },
      { status: 500 }
    );
  }
}