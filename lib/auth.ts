"use server";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
export async function isAuthenticated(request: NextRequest) {
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

import { cookies } from "next/headers";
export async function checkAuth() {
  try {
    const cookieValue = cookies().get("nip")?.value;
    console.log(cookieValue);
    if (!cookieValue) {
      return false;
    }

    const response = await axios.post("/api/auth", { nip: cookieValue });
    console.log(response.status);
    return response.status === 200;
  } catch (error) {
    console.error("" + error);
    return false;
  }
}
