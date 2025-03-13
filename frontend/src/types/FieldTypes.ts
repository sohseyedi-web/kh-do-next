import { ChangeEvent } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export type ValidationSchemaTypes = {
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

export type InputFieldTypes = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  validationSchema?: ValidationSchemaTypes;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  long?: boolean;
};

export type SelectFieldTypes = {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  validationSchema?: ValidationSchemaTypes;
  options: {
    value: string;
    label: string;
  }[];
};
