import { ClassValue } from "clsx";
import cn from "@/utils/cn";

type ButtonTypes = {
  loading?: boolean;
  title: string;
  onClick?: () => void;
  className: ClassValue;
  type?: "submit";
  disabled: boolean;
};

const Button = ({
  className,
  loading,
  title,
  type,
  disabled,
  onClick = () => {},
}: ButtonTypes) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cn(
        "mt-5 rounded-2xl transition-all duration-300 border-none w-full md:h-[55px] h-[45px]",
        className
      )}
    >
      {loading ? "...." : title}
    </button>
  );
};

export default Button;
