"use client";
import { PiCaretUpDownBold, PiListBulletsBold } from "react-icons/pi";

const BlogHeader = () => {
  return (
    <header className="flex items-center justify-between">
      <h3 className="text-2xl font-semibold text-teal-500">لیست بلاگ ها</h3>
      <div className="flex items-center gap-x-3">
        <button className="flex items-center justify-center size-11 rounded-2xl bg-teal-500 text-white">
          <PiListBulletsBold size={24} className="rotate-180" />
        </button>
        <button className="flex items-center justify-center size-11 rounded-2xl bg-teal-500 text-white">
          <PiCaretUpDownBold size={24} />
        </button>
      </div>
    </header>
  );
};

export default BlogHeader;
