"use client"
import Link from "next/link";
import { AiOutlineArrowRight, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

type BlogIdTypes = {
  title: string;
};

const BlogIdHeader = ({ title }: BlogIdTypes) => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <Link href={"/blogs"}>
          <AiOutlineArrowRight size={25} className="text-teal-500"/>
        </Link>
        <h3 className="text-2xl font-semibold text-teal-500">بلاگ {title}</h3>
      </div>
      <div className="flex items-center gap-x-4">
        <AiOutlineEdit size={25} className="text-indigo-600 cursor-pointer" />
        <AiOutlineDelete size={25} className="text-red-600 cursor-pointer" />
      </div>
    </header>
  );
};

export default BlogIdHeader;
