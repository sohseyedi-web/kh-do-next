"use client";
import ToggleSwitch from "@/ui/ToggleSwitch";
import UserAuthBtn from "./UserAuthBtn";

const HeaderLayout = () => {
  return (
    <header className="py-3 md:px-7 px-5 flex items-center justify-between border-b border-[#e6e7ee]">
      <div className="flex items-center gap-x-3">
        <h2 className="text-3xl font-bold text-teal-500">دوربین</h2>
      </div>
      <div className="flex items-center gap-x-2">
        <ToggleSwitch />
        <UserAuthBtn />
      </div>
    </header>
  );
};

export default HeaderLayout;
