import toLocaleDate from "@/utils/toLocalDate";
import Link from "next/link";
import { TiArrowLeftThick } from "react-icons/ti";

const Blog = () => {
  return (
    <section className="border mt-5 p-5 rounded-2xl">
      <div className="flex items-center justify-between">
        <h5 className="lg:text-lg font-semibold">اولین پست</h5>
        <div className="flex items-center gap-x-3">
          <Link href={`/profile/blog`}>
            <TiArrowLeftThick className="text-teal-500 lg:size-7 size-5" />
          </Link>
        </div>
      </div>
      <div className="mt-5 space-y-4">
        <p className="break-words lg:text-base text-sm">
          سلام خوبی من سهیل سیدی هستم و این اولین پست منه فکر کنم که بشه باهم
          بیشتر صحبت کنیم
        </p>
        <div>
          تاریخ ایجاد :{" "}
          <span className="font-semibold text-teal-500 lg:text-base text-sm">
            {toLocaleDate(new Date())}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Blog;
