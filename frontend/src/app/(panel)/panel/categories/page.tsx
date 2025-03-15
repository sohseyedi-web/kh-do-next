"use client";
import { useState } from "react";
import CategoryList from "./CategoryList";
import ModalWrapper from "@/components/ModalWrapper";
import Button from "@/ui/Button";

export default function Categories() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <header className="flex items-center justify-between">
        <h5 className="text-xl font-semibold">دسته بندی ها</h5>
        <span
          onClick={() => setIsOpen(true)}
          className="text-sm text-teal-500 font-semibold cursor-pointer"
        >
          دسته بندی جدید
        </span>
        <ModalWrapper
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
          title={"ایجاد دسته بندی"}
        >
          soheil
        </ModalWrapper>
      </header>
      <hr className="bg-zinc-700 my-3" />
      <CategoryList />
    </section>
  );
}
