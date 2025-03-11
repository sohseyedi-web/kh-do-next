"use client";
import { IoFingerPrint } from "react-icons/io5";
import { useResponsive } from "@/context/ResponsiveProvider";
import ToggleSwitch from "@/ui/ToggleSwitch";

const Navbar = () => {
  const { active, setActive } = useResponsive();

  return (
    <nav className="w-full flex gap-x-2 py-3 px-2 items-center justify-end ">
      <ToggleSwitch />
      <span onClick={() => setActive(!active)}>
        <IoFingerPrint
          size={26}
          className="cursor-pointer text-teal-500 lg:hidden block"
        />
      </span>
    </nav>
  );
};

export default Navbar;
