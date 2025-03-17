"use client";
import UserAuthBtn from "@/app/(main)/_/components/UserAuthBtn";
import { useResponsive } from "@/context/ResponsiveProvider";
import ToggleSwitch from "@/ui/ToggleSwitch";
import { IoFingerPrint } from "react-icons/io5";

const NavbarBlog = () => {
  const { active, setActive } = useResponsive();

  return (
    <nav className="rounded-xl border border-zinc-200 p-4 flex items-center justify-between">
      <h4 className="text-2xl font-bold text-teal-500">بلاگ</h4>
      <div className="flex items-center gap-x-2">
        <span onClick={() => setActive(!active)}>
          <IoFingerPrint
            size={26}
            className="cursor-pointer text-teal-500 lg:hidden block"
          />
        </span>
        <ToggleSwitch />
        <UserAuthBtn />
      </div>
    </nav>
  );
};

export default NavbarBlog;
