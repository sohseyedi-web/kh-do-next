"use server";

import { toStringCookies } from "@/utils/toStringCookies";
import { cookies } from "next/headers";
import { getAllPostsApi } from "./postService";
import { getAllUsersApi } from "./authService";

export async function fetchCardData() {
  const cookieStore = cookies();
  const options = toStringCookies(cookieStore as any);
  try {
    const data = await Promise.all([
      getAllUsersApi(options),
      getAllPostsApi(options),
    ]);

    const numberOfUsers = Number(data[0].users.length ?? "0");
    const numberOfPosts = Number(data[1].posts.length ?? "0");

    return {
      numberOfPosts,
      numberOfUsers,
    };
  } catch (error: any) {
    console.error("خطا", error.response.data.message);
    throw new Error("خطا در بارگذاری اطلاعات");
  }
}

export async function fetchLatestPosts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    const { posts } = await getAllPostsApi("sort=latest&limit=3");
    return posts;
  } catch (error: any) {
    console.error("خطا", error);
    throw new Error(error?.resonse?.data?.message);
  }
}
