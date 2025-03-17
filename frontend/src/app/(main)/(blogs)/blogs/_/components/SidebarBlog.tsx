"use client";
import { useResponsive } from "@/context/ResponsiveProvider";
import Back from "@/ui/Back";

const SidebarBlog = () => {
  const { active } = useResponsive();

  return (
    <>
      <Back />
      <aside
        className={`${
          active ? "w-[18%] right-0 top-0" : "-right-52 w-0 top-0"
        } fixed z-50 lg:relative h-screen p-4 transition-all duration-300`}
      >
        <div className="rounded-xl border border-zinc-200 p-4 h-full">
          <h4 className="text-2xl font-bold text-teal-500">دوربین</h4>
          <div className="pt-7">
            <ul className="flex flex-col gap-y-3"></ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarBlog;
