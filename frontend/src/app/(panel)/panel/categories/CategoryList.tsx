"use client";

import { useCategories } from "@/hooks/category/useCategory";
import Loading from "@/ui/Loading";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const CategoryList = () => {
  const { categories, isLoading } = useCategories();

  if (isLoading) return <Loading />;
  if (!categories.length) return <div>دسته بندی وجود ندارد</div>;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
      {categories?.map((item) => (
        <div
          className="w-full flex items-center justify-between h-[45px] rounded-xl border border-zinc-200 px-2 py-1"
          key={item?.value}
        >
          <h6 className="text-lg text-zinc-800 font-semibold">{item?.label}</h6>
          <div className="flex items-center gap-x-4">
            <AiOutlineEdit size={25} className="text-indigo-600 cursor-pointer" />
            <AiOutlineDelete size={25} className="text-red-600 cursor-pointer" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategoryList;
