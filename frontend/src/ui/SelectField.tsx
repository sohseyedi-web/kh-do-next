import { SelectFieldTypes } from "@/types";
import { get } from "react-hook-form";

function SelectField({
  label,
  name,
  register,
  options,
  errors,
  validationSchema,
}: SelectFieldTypes) {
  return (
    <div className="relative">
      <label htmlFor={name} className="block mb-1 text-zinc-800 cursor-pointer">
        {label}
      </label>
      <select
        className="mb-2 text-zinc-800 w-full cursor-pointer border focus:border-zinc-300 focus:shadow focus:bg-white md:h-[55px] h-[45px] px-3 transition-all duration-300 rounded-2xl outline-none"
        {...(register && register(name, validationSchema))}
        id={name}
        name={name}
      >
        {options.map((option) => (
          <option
            className="bg-zinc-300"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      {get(errors, `${name as string}.message`, null) && (
        <span className="text-red-500 font-semibold">
          {get(errors, `${name as string}.message`, null)}
        </span>
      )}
    </div>
  );
}
export default SelectField;
