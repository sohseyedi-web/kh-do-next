import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";

interface Cookies {
  getAll: () => Promise<{ name: string; value: string }[]>;
}

export const toStringCookies = async (
  cookies: RequestCookies
): Promise<string> => {
  let strCookie = "";
  const allCookies = await cookies.getAll();

  allCookies.forEach((item) => {
    strCookie += `${item.name}=${item.value}; `;
  });

  return strCookie;
};
