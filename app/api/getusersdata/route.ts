import { NextResponse } from "next/server";
import { getUsersdata } from "./utils";

export async function GET() {
  const users = await getUsersdata();
  
  return new NextResponse(
    JSON.stringify({
      status: "success",
      data: users
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":
          process.env.VERCEL_ENV === "production"
            ? "https://www.tiagosc.com.br/"
            : "*",
      }
    }
  )
}