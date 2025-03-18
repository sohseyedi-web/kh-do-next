import { getAllPostsApi } from "@/services/postService";
import { toStringCookies } from "@/utils/toStringCookies";
import { cookies } from "next/headers";
import queryString from "query-string";
import BlogBox from "./_/components/BlogBox";
import { BlogTypes } from "@/types";

interface BlogPageProps {
  searchParams: Promise<any>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const queries = queryString.stringify(searchParams);
  // set headers:
  const cookieStore = await cookies();
  const options = toStringCookies(cookieStore);

  const { posts } = await getAllPostsApi(queries, options);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cursor-pointer mt-5 gap-4">
      {posts?.map((post: BlogTypes) => (
        <BlogBox key={post._id} blog={post} />
      ))}
    </div>
  );
}
