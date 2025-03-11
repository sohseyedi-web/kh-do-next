"use client";
import SidebarLayout from "@/components/SidebarWrapper";
import { useDetailUser } from "@/hooks/users/useGetUser";
import { CustomNavlink } from "@/ui/CustomNavlink";
import * as HiIcon from "react-icons/hi2";
import { IoDocumentsOutline } from "react-icons/io5";
import { TbUserSquareRounded } from "react-icons/tb";


const Sidebar = () => {
  const { user } = useDetailUser();

  return (
    <SidebarLayout>
      <CustomNavlink to={"/panel/me"}>
        <TbUserSquareRounded size={26}/>
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
    </SidebarLayout>
  );
};

export default Sidebar;
