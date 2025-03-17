import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type ValidationSchema = {
  required?: string;
  minLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
};

export type ReactHookFormItem = Record<string, any>;

export interface FileUploadFieldTypes {
  label: string;
  name: string;
  errors: Record<string, { message?: string }>;
  placeholder?: string;
  onChange?: (file: File | null) => void;
}

export interface InputFieldTypes {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  validationSchema?: ValidationSchema;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  long?: boolean;
  dir?: "rtl" | "ltr";
}

export interface SelectFieldTypes {
  label: string;
  name: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  validationSchema?: ValidationSchema;
  options: {
    value: string;
    label: string;
  }[];
}
