import { cookies } from "next/headers";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nip } = body;

    const nipEnv = process.env.QL_NIP;
    console.log(nip);
    console.log(nipEnv);
    if (nip != nipEnv) {
      return new Response("nip is not valid", { status: 401 });
    }
    cookies().set("nip", nip);
    return new Response("Authorized!", {
      status: 200,
    });
  } catch (error) {
    return new Response("Internal error", { status: 500 });
  }
}
