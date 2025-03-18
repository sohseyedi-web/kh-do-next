"use client";
import SidebarLayout from "@/components/SidebarWrapper";
import { CustomNavlink } from "@/ui/CustomNavlink";
import { HiOutlineHome } from "react-icons/hi";

const SidebarBlog = () => {
  return (
    <SidebarLayout className="h-screen p-4 lg:bg-transparent bg-white">
      <div className="rounded-xl lg:border lg:border-zinc-200 lg:p-4 p-2 h-full ">
        <h4 className="text-2xl font-bold text-teal-500">دوربین</h4>
        <div className="pt-7">
          <ul className="flex flex-col gap-y-3">
            <CustomNavlink to={"/panel"}>
              <HiOutlineHome size={26} />
              <h6>صفحه اصلی</h6>
            </CustomNavlink>
          </ul>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default SidebarBlog;
