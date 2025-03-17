import { getAllPostsApi } from "@/services/postService";
import { toStringCookies } from "@/utils/toStringCookies";
import { cookies } from "next/headers";
import queryString from "query-string";
import BlogBox from "./_/components/BlogBox";

interface BlogPageProps {
  searchParams: Record<string, string>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const queries = queryString.stringify(searchParams);
  // set headers:
  const cookieStore = cookies();
  const options = toStringCookies(cookieStore as any);

  const { posts, totalPages } = await getAllPostsApi(queries, options);

  const { q: searchValue } = searchParams;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cursor-pointer mt-5 gap-4">
      {posts?.map((post : any) => (
        <BlogBox key={post._id} blog={post} />
      ))}
    </div>
  );
}
