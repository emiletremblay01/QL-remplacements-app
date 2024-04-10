import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";

// Limit the middleware to paths starting with `/api/`
// export const config = {
//   matcher: "/api/:function*",
// };

export const config = {
  matcher: "/:path*",
};
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/login")) {
    console.log("1");
    return NextResponse.next();
  }

  const response = isAuthenticated(request);
  let auth = false;

  if (response.status !== 401) {
    auth = true;
  }

  if (auth) {
    return NextResponse.next();
  }

  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL("/login", request.url));
}
