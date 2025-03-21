import { type NextRequest, NextResponse } from "next/server";
import middlewareAuth from "./utils/middlewareAuth";

export async function middleware(req: NextRequest) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  //   protected profile
  if (pathname.startsWith("/profile")) {
    const { user } = await middlewareAuth(req);
    if (!user) return NextResponse.redirect(new URL("/join", url));
  }

  //   protected join auth
  if (pathname.startsWith("/join")) {
    const { user } = await middlewareAuth(req);
    if (user) return NextResponse.redirect(new URL("/panel", url));
  }
}

export const config = {
  matcher: ["/", "/profile/:path*", "/join"],
};
