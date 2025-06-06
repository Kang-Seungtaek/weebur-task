import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/products"; // 이동할 경로
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
