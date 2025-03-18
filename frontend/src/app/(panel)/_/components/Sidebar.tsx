"use client";
import SidebarLayout from "@/components/SidebarWrapper";
import { useDetailUser, useLogOut } from "@/hooks/users/useGetUser";
import { CustomNavlink } from "@/ui/CustomNavlink";
import { useRouter } from "next/navigation";
import * as HiIcon from "react-icons/hi2";
import { IoDocumentsOutline } from "react-icons/io5";
import { RiShutDownLine } from "react-icons/ri";
import { TbUserSquareRounded, TbCategory2 } from "react-icons/tb";

const Sidebar = () => {
  const router = useRouter();
  const { user } = useDetailUser();
  const { logOut } = useLogOut();

  const logoutHandler = async () => {
    await logOut();
    router.push("/");
  };

  return (
    <SidebarLayout className="h-svh bg-gray-100 border-l py-3.5 px-3">
      <h4 className="text-2xl font-bold text-teal-500">دوربین</h4>
      <div className="pt-7">
        <ul className="flex flex-col gap-y-3">
          <CustomNavlink to={"/panel/me"}>
            <TbUserSquareRounded size={26} />
            <h6>{user?.username}</h6>
          </CustomNavlink>
          <CustomNavlink to={"/panel"}>
            <HiIcon.HiOutlineHome size={26} />
            <h6>صفحه اصلی</h6>
          </CustomNavlink>
          <CustomNavlink to={"/panel/create"}>
            <HiIcon.HiOutlinePlusCircle size={26} />
            <h6>نوشتن بلاگ</h6>
          </CustomNavlink>
          <CustomNavlink to={"/panel/blogs"}>
            <IoDocumentsOutline size={26} />
            <h6>بلاگ های من</h6>
          </CustomNavlink>
          <CustomNavlink to={"/panel/users"}>
            <HiIcon.HiOutlineUserGroup size={26} />
            <h6>لیست کاربران</h6>
          </CustomNavlink>
          <CustomNavlink to={"/panel/categories"}>
            <TbCategory2 size={26} />
            <h6>دسته بندی ها</h6>
          </CustomNavlink>
          <button
            onClick={logoutHandler}
            className="w-full flex items-center gap-x-2 hover:bg-red-500 hover:text-white rounded-xl px-2 py-1.5 transition-all duration-300"
          >
            <RiShutDownLine size={26} />
            <h6>خروج از حساب </h6>
          </button>
        </ul>
      </div>
    </SidebarLayout>
  );
};

export default Sidebar;
