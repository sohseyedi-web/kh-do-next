import { BlogTypes } from "@/types";
import toLocaleDate from "@/utils/toLocalDate";
import truncateText from "@/utils/truncate";
import Link from "next/link";
import { TiArrowLeftThick } from "react-icons/ti";

const Blog = ({ blog }: { blog: BlogTypes }) => {
  return (
    <section className="border mt-5 p-5 rounded-2xl">
      <div className="flex items-center justify-between">
        <h5 className="lg:text-lg font-semibold">{blog.title}</h5>
        <div className="flex items-center gap-x-3">
          <Link href={`/profile/blog/${blog.slug}`}>
            <TiArrowLeftThick className="text-teal-500 lg:size-7 size-5" />
          </Link>
        </div>
      </div>
      <div className="mt-5 space-y-4">
        <p className="break-words lg:text-base text-sm">
          {truncateText(blog.text, 20)}
        </p>
        <div>
          تاریخ ایجاد :{" "}
          <span className="font-semibold text-teal-500 lg:text-base text-sm">
            {toLocaleDate(blog.createdAt)}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Blog;
