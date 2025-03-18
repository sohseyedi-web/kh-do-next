"use client";
import { useResponsive } from "@/context/ResponsiveProvider";
import Back from "@/ui/Back";
import cn from "@/utils/cn";
import { ClassValue } from "clsx";

type SidebarLayoutTypes = {
  children: React.ReactNode;
  className?: ClassValue;
};

const SidebarLayout = ({ children, className }: SidebarLayoutTypes) => {
  const { active } = useResponsive();

  return (
    <>
      <Back />
      <aside
        className={cn(
          `${
            active ? "lg:w-[18%] w-[240px] right-0 top-0" : "-right-52 w-0 top-0"
          } fixed z-50 lg:relative space-y-3 transition-all duration-300`,
          className
        )}
      >
        {children}
      </aside>
    </>
  );
};

export default SidebarLayout;
