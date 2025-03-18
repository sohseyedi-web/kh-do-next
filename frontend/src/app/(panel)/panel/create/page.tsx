"use client";
import { Controller, FieldValues, useForm } from "react-hook-form";
import Button from "@/ui/Button";
import InputField from "@/ui/InputField";
import SelectField from "@/ui/SelectField";
import { useState } from "react";
import FileUploadField from "@/ui/FileInputField";
import { useCategories } from "@/hooks/category/useCategory";
import { useCreatePost } from "@/hooks/posts/usePost";
import { useRouter } from "next/navigation";

const CreateBlog = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FieldValues>();

  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(null);
  const { createPost, isCreating } = useCreatePost();
  const { categories } = useCategories();
  const router = useRouter();

  const onSubmit = async (values: FieldValues) => {
    const formData = new FormData();

    for (const key in values) {
      formData.append(key, values[key]);
    }
    createPost(formData, {
      onSuccess: () => {
        router.push("/panel");
      },
    });
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
        options={categories}
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
            errors={errors as Record<string, { message?: string }>}
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
        disabled={isCreating}
        loading={isCreating}
        className={`md:text-lg transition-colors text-white hover:bg-teal-400 bg-teal-500 lg:col-span-2 w-full`}
      />
    </form>
  );
};

export default CreateBlog;
