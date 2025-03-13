"use client";
import { Controller, FieldValues, useForm } from "react-hook-form";
import Button from "@/ui/Button";
import InputField from "@/ui/InputField";
import SelectField from "@/ui/SelectField";
import { useState } from "react";
import FileUploadField from "@/ui/FileInputField";
import useCategories from "@/hooks/useCategory";

const CreateBlog = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
  } = useForm<FieldValues>();

  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(null);
  const { transformedCategories } = useCategories();

  const onSubmit = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <form
      className="grid lg:grid-cols-2 grid-cols-1 gap-3 lg:w-[50%] w-[95%] rounded-2xl shadow-sm border border-zinc-200 p-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        name="title"
        placeholder="عنوان خودت رو وارد کن"
        register={register}
        label="عنوان"
        errors={errors}
        validationSchema={{ required: "باید عنوان برای بلاگ وارد بشه" }}
      />
      <InputField
        name="briefText"
        placeholder="متن کوتاه خودت رو وارد کن"
        register={register}
        label="متن کوتاه"
        errors={errors}
        validationSchema={{ required: " باید متن کوتاه برای بلاگ وارد بشه" }}
      />
      <InputField
        name="slug"
        placeholder="آدرس صفحه خودت رو وارد کن"
        register={register}
        label="آدرس صفحه"
        errors={errors}
        validationSchema={{ required: " باید آدرس صفحه برای بلاگ وارد بشه" }}
      />
      <InputField
        label="زمان مطالعه"
        name="readingTime"
        register={register}
        errors={errors}
        placeholder="زمان مطالعه برای بلاگ"
        validationSchema={{ required: " باید زمان مطالعه برای بلاگ وارد بشه" }}
      />
      <SelectField
        label="دسته بندی"
        name="category"
        register={register}
        errors={errors}
        validationSchema={{ required: "دسته بندی مشخص نشده" }}
        options={transformedCategories}
      />
      <Controller
        control={control}
        name="coverImage"
        rules={{ required: "عکس کاور بلاگ الزامی است" }}
        render={({ field: { onChange, ...field } }) => (
          <FileUploadField
            {...field}
            label="کاور بلاگ"
            placeholder="یک عکس انتخاب کنید"
            onChange={(file) => {
              onChange(file);
              setCoverImageUrl(file ? URL.createObjectURL(file) : "");
            }}
            errors={errors}
          />
        )}
      />

      <div className="lg:col-span-2">
        <InputField
          label="متن بلاگ"
          name="text"
          register={register}
          errors={errors}
          placeholder="متن بلاگ رو بنویسید"
          validationSchema={{ required: " باید متن بلاگ وارد بشه" }}
          long={true}
        />
      </div>
      <Button
        title="ارسال بلاگ"
        disabled={false}
        className={`md:text-lg transition-colors text-white hover:bg-teal-400 bg-teal-500 lg:col-span-2 w-full`}
      />
    </form>
  );
};

export default CreateBlog;
