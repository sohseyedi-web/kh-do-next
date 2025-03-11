"use client";
import { useResponsive } from "@/context/ResponsiveProvider";
import { useLogOut } from "@/hooks/users/useGetUser";
import Back from "@/ui/Back";
import { usePathname, useRouter } from "next/navigation";
import * as RiIcon from "react-icons/ri";
import { SiRobotframework } from "react-icons/si";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { active } = useResponsive();
  const { logOut } = useLogOut();

  const logoutHandler = async () => {
    await logOut();
    router.push("/");
  };

  return (
    <>
      <Back />
      <aside
        className={`${
          active ? "w-[240px] right-0 top-0" : "-right-20 w-0 top-0"
        } fixed z-50 lg:relative h-svh bg-gray-100 dark:bg-slate-900  border-l dark:border-slate-900  py-3.5 px-3 rounded space-y-3 transition-all duration-300`}
      >
        <h4 className="text-2xl font-bold text-teal-500">دوربین</h4>
        <div className="pt-7">
          <ul className="flex flex-col gap-y-3">
            {children}
            {pathname === "/blogs" ? null : (
              <button
                onClick={logoutHandler}
                className="w-full flex items-center gap-x-2 hover:bg-red-500 hover:text-white rounded-xl px-2 py-1.5 transition-all duration-300"
              >
                <RiIcon.RiShutDownLine size={26} />
                <h6>خروج از حساب </h6>
              </button>
            )}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SidebarLayout;
