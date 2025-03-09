import { InputFieldTypes } from "@/types/FieldTypes";
import { get } from "react-hook-form";

function InputField({
  label,
  name,
  type = "text",
  placeholder = "",
  register,
  errors,
  validationSchema,
  value,
  onChange,
}: InputFieldTypes) {
  return (
    <div className="w-full relative">
      <label htmlFor={name} className="block mb-1 text-zinc-800 cursor-pointer">
        {label}
      </label>
      <input
        autoComplete="off"
        className="placeholder:text-zinc-500 mb-2 text-zinc-800 w-full border focus:border-zinc-300 focus:shadow focus:bg-white md:h-[55px] h-[45px] px-3 transition-all duration-300 rounded-2xl outline-none"
        type={type}
        id={name}
        value={value}
        defaultValue={value}
        placeholder={placeholder}
        {...register(name, validationSchema)}
        onChange={onChange}
      />
      {get(errors, `${name as string}.message`, null) && (
        <span className="text-red-500 font-semibold">
          {get(errors, `${name as string}.message`, null)}
        </span>
      )}
    </div>
  );
}

export default InputField;
