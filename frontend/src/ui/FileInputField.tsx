"use client";
import ModalWrapper from "@/components/ModalWrapper";
import { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa6";

interface FileUploadFieldProps {
  label: string;
  name: string;
  errors: Record<string, { message?: string }>;
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
    if (file) {
      const url = URL.createObjectURL(file);
      setFileName(file.name);
      setFileUrl(url);
      if (onChange) onChange(file);
    } else {
      setFileName(null);
      setFileUrl(null);
      if (onChange) onChange(null);
    }
  };

  useEffect(() => {
    return () => {
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl);
      }
    };
  }, [fileUrl]);

  return (
    <div className="w-full relative">
      <label htmlFor={name} className="block mb-1 text-zinc-800 cursor-pointer">
        {label}
      </label>
      <label
        htmlFor={name}
        className="w-full cursor-pointer placeholder:text-zinc-500 mb-2 text-zinc-800 border focus:border-zinc-300 focus:shadow focus:bg-white md:h-[55px] h-[45px] px-3 flex items-center justify-between transition-all duration-300 rounded-2xl outline-none"
      >
        <span className="text-zinc-500">
          {fileUrl ? (
            <span
              className="text-blue-500 font-semibold cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(true);
              }}
            >
              مشاهده
            </span>
          ) : (
            placeholder
          )}
        </span>
        <span className="text-blue-500 font-semibold">
          {fileUrl ? (
            <FaEye size={20} className="text-zinc-800" />
          ) : (
            "انتخاب فایل"
          )}
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
        isOpen={isModalOpen && Boolean(fileUrl)}
        onClose={() => setIsModalOpen(false)}
      >
        {fileUrl && (
          <img
            src={fileUrl}
            alt="Uploaded preview"
            className="w-full h-auto object-cover"
          />
        )}
      </ModalWrapper>
    </div>
  );
}

export default FileUploadField;
