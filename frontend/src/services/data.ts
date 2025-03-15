"use server";

import api from "./http";
import { getAllPostsApi } from "./postService";
import { GET_CATEGORY } from "./urls";

export async function fetchCardData() {
  try {
    const [postData, categoryData] = await Promise.all([
      getAllPostsApi("sort=latest"),
      api.get(GET_CATEGORY),
    ]);

    const numOfPosts = postData?.posts?.length ?? 0;
    const numOfCategories = categoryData?.data?.data?.categories?.length ?? 0;

    return { numOfPosts, numOfCategories };
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
