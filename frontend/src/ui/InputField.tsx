import { InputFieldTypes } from "@/types/FieldTypes";

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
  long = false,
}: InputFieldTypes) {
  return (
    <div className="w-full relative">
      <label
        htmlFor={name}
        className="block mb-1 text-zinc-800 cursor-pointer w-full"
      >
        {label}
      </label>
      {long ? (
        <textarea
          autoComplete="off"
          className="placeholder:text-zinc-500 mb-2 p-3 text-zinc-800 w-full border focus:border-zinc-300 focus:shadow focus:bg-white h-[125px] resize-none transition-all duration-300 rounded-2xl outline-none"
          id={name}
          value={value}
          placeholder={placeholder}
          {...register(name, validationSchema)}
          onChange={onChange}
        />
      ) : (
        <input
          autoComplete="off"
          className="placeholder:text-zinc-500 mb-2 text-zinc-800 w-full border focus:border-zinc-300 focus:shadow focus:bg-white md:h-[55px] h-[45px] px-3 transition-all duration-300 rounded-2xl outline-none"
          type={type}
          id={name}
          value={value}
          placeholder={placeholder}
          {...register(name, validationSchema)}
          onChange={onChange}
        />
      )}
      {errors[name]?.message && (
        <span className="text-red-500 font-semibold">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
}

export default InputField;
