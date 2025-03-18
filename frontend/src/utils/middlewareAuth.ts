import type { NextRequest } from "next/server";
import { toStringCookies } from "./toStringCookies";

export default async function middlewareAuth(req: NextRequest) {
  const cookiesString = await toStringCookies(req.cookies);

  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/profile`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        Cookie: cookiesString,
      },
    }
  ).then((res) => res.json());

  const { user } = data || {};
  return { user };
}
