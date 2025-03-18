import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export const toStringCookies = async (
  cookies: RequestCookies | ReadonlyRequestCookies
): Promise<string> => {
  let strCookie = "";
  const allCookies = await cookies.getAll();

  allCookies.forEach((item) => {
    strCookie += `${item.name}=${item.value}; `;
  });

  return strCookie;
};
