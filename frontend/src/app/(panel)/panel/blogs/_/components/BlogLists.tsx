import Blog from "@/components/BlogBox";
import { getAllPostsApi } from "@/services/postService";
import { BlogTypes } from "@/types";

const BlogLists = async ({ query }: { query: string }) => {
  const blogs = await getAllPostsApi(query);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 lg:gap-6 md:gap-4 gap-1">
      {blogs?.posts?.map((blog: BlogTypes) => (
        <Blog key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogLists;
