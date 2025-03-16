import Link from "next/link";
import { fetchLatestPosts } from "@/services/data";
import { BlogTypes } from "@/types";
import Blog from "@/components/BlogBox";

const LatesBlog = async() => {

  const blogs = await fetchLatestPosts()

  return (
    <>
      <header className="flex items-center justify-between mb-3">
        <h5 className="lg:text-2xl text-teal-500 font-semibold text-lg">
          آخرین بلاگ ها
        </h5>
        <Link href={"/panel/blogs"} className=" text-teal-500">
          مشاهده همه
        </Link>
      </header>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 lg:gap-6 md:gap-4 gap-1">
        {blogs.map((blog : BlogTypes) => (
          <Blog key={blog._id} blog={blog}/>
        ))}
      </div>
    </>
  );
};

export default LatesBlog;
