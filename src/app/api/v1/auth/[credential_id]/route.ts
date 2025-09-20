import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { JWT_SECRET, VERIFYER } from "@/config";
import { SignJWT } from "jose";

export async function GET(
  req: Request,
  { params }: { params: { credential_id: string } }
) {
  try {
    const credId = params.credential_id;
    if (credId !== VERIFYER) {
      throw new Error("User access blocked due to not providing a valid URL ");
    }

    const token = await new SignJWT({ id__: "active" })
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("1h") // token expires in 1 hour
      .sign(JWT_SECRET);

    const response = NextResponse.redirect(new URL("/", req.url));
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { msg: "Access to the App failed", error: String(error) },
      { status: 500 }
    );
  }
}
