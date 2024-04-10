"use server";
import { NextRequest, NextResponse } from "next/server";

export function isAuthenticated(request: NextRequest) {
  try {
    const cookie = request.cookies.get("nip");
    const nip = process.env.QL_NIP;

    if (!nip) {
      return new NextResponse("Server error QL_NIP is undefined", {
        status: 500,
      });
    }

    if (!cookie) {
      return new NextResponse("cookie is undefined", { status: 401 });
    }

    if (!(cookie.value == nip)) {
      return new NextResponse("nip is not valid", { status: 401 });
    }

    return new NextResponse("success", { status: 200 });
  } catch (error) {
    console.error(error);

    return new NextResponse("Internal error", { status: 500 });
  }
}
