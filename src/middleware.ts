import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@/config";
import { jwtVerify } from "jose";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  console.log("🚀 ~ middleware ~ token:", token);

  // Allow public pages if needed
  const PUBLIC_PATHS = ["/"]; // homepage is public
  if (PUBLIC_PATHS.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Check if token exists
  if (!token) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  try {
    // Verify JWT
    jwtVerify(token, JWT_SECRET);
    console.log("Success");
    return NextResponse.next(); // token valid, allow access
  } catch (err) {
    console.log("🚀 ~ middleware ~ err:", err);
    // token invalid or expired
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }
}

// Apply middleware only to /version/* routes
export const config = {
  matcher: ["/version/:path*"], // protects /version/* and all subpaths
};
