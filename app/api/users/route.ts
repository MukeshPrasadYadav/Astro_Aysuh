import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User, { Role } from "@/models/User";
import Session from "@/models/Session";
import bcrypt from "bcrypt";

export interface UserDetails {
  name : string;
  number : string;
  id : string;
  role : Role
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { name, number , password } = await request.json();

    if (!name || !number) {
      return NextResponse.json(
        { message: "Name and phone are required" },
        { status: 400 }
      );
    }

    // Find or create user
    let user = await User.findOne({number});

    

    let hashedPassword = await bcrypt.hash(password ? password : number , 10);

    console.log("password",password)

    if (
  user &&
  Number(user.role) === Role.ADMIN
) {
  if (!password) {
    throw new Error("Password is required");
  }

  const passwordMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordMatch) {
    throw new Error("Unauthorized");
  }
}
    
    if (!user) {
      user = await User.create({
        name,
        number,
        password : hashedPassword
      });
    }

    // Create your session ID
    const sessionId = crypto.randomUUID();
    await Session.create({
      sessionId,
      userId: user._id,
      expiresAt: new Date(Date.now() + 1 * 24 * 60 * 30 * 1000),
    });

    const response = NextResponse.json({
      message: "Login successful",
    });

    // Set HTTP-only cookie
    response.cookies.set("sessionId", sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 1 * 60 * 24 * 30,
    });

    return response;

  } catch (error) {
    console.error("error",error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // Get sessionId from cookie
    const sessionId = request.cookies.get("sessionId")?.value;

    if (!sessionId) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

    // Find session
    const session = await Session.findOne({
      sessionId,
    });

    if (!session) {
      return NextResponse.json(
        { message: "Invalid session" },
        { status: 401 }
      );
    }

    // Check expiration
    if (session.expiresAt < new Date()) {
      return NextResponse.json(
        { message: "Session expired" },
        { status: 401 }
      );
    }

    // Find user
    const user = await User.findById(session.userId).select(
      "_id name number role"
    );

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }


    return NextResponse.json({
      id: user._id.toString(),
      name: user.name,
      number: user.number,
      role: Number(user.role) === Role.ADMIN ? "ADMIN" : "USER",
    });
  } catch (error) {
    console.error("GET /api/users/me error:", error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}