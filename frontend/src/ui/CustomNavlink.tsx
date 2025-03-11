import Link from "next/link";
import { usePathname } from "next/navigation";

type CustomNavlinkType = {
  children: React.ReactNode;
  to: string;
};

export const CustomNavlink = ({ children, to }: CustomNavlinkType) => {
  const pathname = usePathname();

  const navlinkClass =
    "flex items-center gap-x-2 px-2 py-1.5 rounded-xl transition-all duration-300 hover:bg-teal-600 hover:text-white";

  return (
    <li>
      <Link
        href={to}
        className={
          pathname === to
            ? `${navlinkClass} bg-teal-500 text-white font-semibold`
            : `${navlinkClass} text-zinc-800 dark:text-zinc-200`
        }
      >
        {children}
      </Link>
    </li>
  );
};
