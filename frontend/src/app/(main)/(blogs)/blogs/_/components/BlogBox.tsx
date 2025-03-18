"use client";
import { BlogTypes } from "@/types";
import Button from "@/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CiBookmark, CiHeart } from "react-icons/ci";

const BlogBox = ({ blog }: { blog: BlogTypes }) => {
  const router = useRouter();

  return (
    <div
      key={blog._id}
      className="shadow-sm cursor-pointer border border-zinc-200 rounded-xl duration-300 hover:shadow-xl p-3"
    >
      <div className="relative w-full h-[150px]">
        <Image
          src={blog?.coverImageUrl as string}
          alt={blog?.title}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <div className="py-3">
        <span className="text-zinc-500 font-semibold text-sm">
          {blog?.category?.title}
        </span>
        <p className="text-xl font-bold text-teal-500 my-2">{blog.title}</p>
        <div className="flex items-center justify-between">
          <Button
            title={"مشاهده بلاگ"}
            className="bg-teal-500 hover:bg-teal-600 text-white text-lg w-[65%]"
            disabled={false}
            onClick={() => router.push(`/${blog.slug}`)}
          />
          <div className="flex items-center justify-between w-[30%]">
            <Button
              title={<CiHeart size={22} />}
              disabled={false}
              className="w-[45%] text-red-500  bg-zinc-100 flex items-center justify-center"
            />
            <Button
              title={<CiBookmark size={22} />}
              disabled={false}
              className="w-[45%] text-blue-500 bg-zinc-100 flex items-center justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
