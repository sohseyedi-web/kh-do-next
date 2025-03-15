"use client";

import ModalWrapper from "@/components/ModalWrapper";
import { useCategories } from "@/hooks/category/useCategory";
import Loading from "@/ui/Loading";
import { useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import CategoryForm from "./_/components/CategoryForm";

const CategoryList = () => {
  const { categories, isLoading, rawCategories } = useCategories();
  const [isOpen,setIsOpen] = useState(false)

  if (isLoading) return <Loading />;
  if (!categories.length) return <div>دسته بندی وجود ندارد</div>;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
      {rawCategories?.map((item) => (
        <div
          className="w-full flex items-center justify-between h-[45px] rounded-xl border border-zinc-200 px-2 py-1"
          key={item?._id}
        >
          <h6 className="text-lg text-zinc-800 font-semibold">{item?.title}</h6>
          <div className="flex items-center gap-x-4">
            <AiOutlineEdit
              size={25}
              className="text-indigo-600 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
            <AiOutlineDelete
              size={25}
              className="text-red-600 cursor-pointer"
            />
          </div>
          <ModalWrapper
            onClose={() => setIsOpen(false)}
            isOpen={isOpen}
            title={`ویرایش ${item.title}`}
          >
            <CategoryForm
              onClose={() => setIsOpen(false)}
              categoryToEdit={item}
            />
          </ModalWrapper>
        </div>
      ))}
    </section>
  );
};

export default CategoryList;
