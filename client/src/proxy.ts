import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("PATHNAME:", pathname);

  if (
    pathname === "" ||
    pathname === "/" ||
    pathname === ("/portfolio") ||
    pathname === ("/projects")
  ) {
    console.log('return path name')
    return NextResponse.next();
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session && (pathname === "/login" || pathname === '/register')) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  else if(!session && pathname === '/login') {
    return NextResponse.next();
  }
  else if(!session && pathname === '/register') {
    return NextResponse.next();
  }
  else if(!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*", "/projects/:path*", '/login', '/register'
  ],
};