"use client";
import { useEffect, useRef, useState } from "react";
import { RiUserLine } from "react-icons/ri";
import { useDetailUser, useLogOut } from "@/hooks/users/useGetUser";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UserAuthBtn = () => {
  const { user, isLoading } = useDetailUser();
  const { logOut, isPending } = useLogOut();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onHandleClick = () => {
    if (user?._id) {
      setIsDropdownOpen((prev) => !prev);
    } else {
      router.push("/join");
    }
  };

  const handleLogout = () => {
    logOut();
    toast.success("خروج موفق بود");
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onHandleClick}
        aria-label={user?.username ? "صفحه پروفایل شما" : "ورود به دوربین"}
        className={`
          ${isLoading ? "blur-sm opacity-70" : "opacity-100 blur-0"}
          ${user?._id ? " bg-teal-500 text-white" : " bg-white text-[#292a33]"}
          md:w-[150px] w-[42px] h-[42px] border rounded-xl border-zinc-100
          flex items-center justify-center hover:bg-teal-600 transition-all
          duration-300  font-medium relative
        `}
      >
        <span className="md:block hidden">
          {user?.username ? user?.username : "ورود به دوربین"}
        </span>
        <RiUserLine size={25} className="md:hidden block" />
      </button>

      {isDropdownOpen && user?._id && (
        <div
          className="absolute md:right-0 -right-28 bg-gray-100 top-12 w-[150px] border border-zinc-100 rounded-xl z-50 transition-all
          duration-300"
        >
          <ul>
            <li>
              <button
                onClick={() => router.push("/panel")}
                className="block w-full px-4 rounded-t-xl py-2 text-[#292a33] hover:bg-gray-200 text-right"
              >
                پنل کاربری
              </button>
            </li>
            <hr />
            <li>
              <button
                onClick={handleLogout}
                className="block w-full px-4 rounded-b-xl py-2 text-red-500 hover:bg-gray-200 text-right"
              >
                {isPending ? "..." : " خروج از حساب"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserAuthBtn;
