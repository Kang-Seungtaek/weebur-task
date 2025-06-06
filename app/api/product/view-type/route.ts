import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { ProductViewType } from "@types";

const VIEW_TYPE_COOKIE_KEY = "viewType";
const VIEW_TYPE_EXPIRY_COOKIE_KEY = "viewTypeExpire";

export async function GET() {
  const cookieStore = await cookies();
  const viewTypeCookie = cookieStore.get(VIEW_TYPE_COOKIE_KEY);
  const expiryCookie = cookieStore.get(VIEW_TYPE_EXPIRY_COOKIE_KEY);

  const now = Date.now();

  if (viewTypeCookie && expiryCookie && parseInt(expiryCookie.value) > now) {
    return NextResponse.json<{ type: ProductViewType; expiry: number }>({
      type: viewTypeCookie.value as ProductViewType,
      expiry: parseInt(expiryCookie.value),
    });
  }

  const type: ProductViewType = Math.random() < 0.5 ? "list" : "grid";
  const expiry = now + 24 * 60 * 60 * 1000;

  const response = NextResponse.json<{ type: ProductViewType; expiry: number }>(
    {
      type,
      expiry,
    },
  );

  response.cookies.set(VIEW_TYPE_COOKIE_KEY, type, {
    maxAge: 24 * 60 * 60,
    path: "/",
  });
  response.cookies.set(VIEW_TYPE_EXPIRY_COOKIE_KEY, expiry.toString(), {
    maxAge: 24 * 60 * 60,
    path: "/",
  });

  return response;
}
