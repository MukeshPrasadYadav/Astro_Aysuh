import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Book from "@/models/book";
import User from "@/models/User";
import { supabase } from "@/lib/superbaseconfig";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await connectDB();

    // TODO: Get user from your session
    const userId = req.headers.get("x-user-id");

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const user = await User.findById(userId).lean();

    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // Check whether user purchased this book
    if (!user.books.includes(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "You have not purchased this book",
        },
        { status: 403 }
      );
    }

    const book = await Book.findById(id).lean();

    if (!book) {
      return NextResponse.json(
        { success: false, message: "Book not found" },
        { status: 404 }
      );
    }



    // This should be the path stored in Supabase
    const pdfPath = book.pdfPublicId;
  

    if (!pdfPath) {
      return NextResponse.json(
        { success: false, message: "PDF not found" },
        { status: 404 }
      );
    }

    // Download directly from your PRIVATE Supabase bucket
    const { data,error } = await supabase.storage
      .from("pdf")
      .download(pdfPath)

      if(!data || error){
         return NextResponse.json(
      {
        success: false,
        message: "unable to download pdf try again",
      },
      { status: 500 }
    );
        
      }

    // Convert Blob → ArrayBuffer
    const arrayBuffer = await data.arrayBuffer();

    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${book.name || "book"}.pdf"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch (error) {
    console.error("Download book error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}