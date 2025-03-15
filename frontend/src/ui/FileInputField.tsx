"use client";
import ModalWrapper from "@/components/ModalWrapper";
import { useState } from "react";

interface FileUploadFieldProps {
  label: string;
  name: string;
  errors: any;
  placeholder?: string;
  onChange?: (file: File | null) => void;
}

function FileUploadField({
  label,
  name,
  errors,
  placeholder = "یک عکس انتخاب کنید",
  onChange,
}: FileUploadFieldProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFileName(file ? file.name : null);
    if (file) {
      setFileUrl(URL.createObjectURL(file));
    }
    if (onChange) onChange(file);
  };

  return (
    <div className="w-full relative">
      <label htmlFor={name} className="block mb-1 text-zinc-800 cursor-pointer">
        {label}
      </label>
      <label
        htmlFor={fileUrl ? undefined : name}
        className="w-full cursor-pointer placeholder:text-zinc-500 mb-2 text-zinc-800 border focus:border-zinc-300 focus:shadow focus:bg-white md:h-[55px] h-[45px] px-3 flex items-center justify-between transition-all duration-300 rounded-2xl outline-none"
        onClick={() => fileUrl && setIsModalOpen(true)}
      >
        <span className="text-zinc-500">
          {fileUrl ? "مشاهده" : placeholder}
        </span>
        <span className="text-blue-500 font-semibold">
          {fileUrl ? "👁️" : "انتخاب فایل"}
        </span>
      </label>
      <input
        type="file"
        id={name}
        className="hidden"
        onChange={handleFileChange}
      />
      {errors[name]?.message && (
        <span className="text-red-500 font-semibold">
          {errors[name]?.message}
        </span>
      )}

      <ModalWrapper
        title="مشاهده عکس"
        isOpen={Boolean(isModalOpen && fileUrl)}
        onClose={() => setIsModalOpen(false)}
      >
        <img
          src={fileUrl ?? undefined}
          alt="Uploaded preview"
          className="w-full h-auto object-cover"
        />
      </ModalWrapper>
    </div>
  );
}

export default FileUploadField;
