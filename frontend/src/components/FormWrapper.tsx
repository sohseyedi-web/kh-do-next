import cn from "@/utils/cn";
import { ClassValue } from "clsx";

type FormTypes = {
  children: React.ReactNode;
  className: ClassValue;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

// lg:grid-cols-2 grid-cols-1 lg:w-[45%] w-[95%]

const FormWrapper = ({ children, className, onSubmit }: FormTypes) => {
  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "grid gap-3 rounded-2xl shadow-sm border border-zinc-200 p-5",
        className
      )}
    >
      {children}
    </form>
  );
};

export default FormWrapper;
