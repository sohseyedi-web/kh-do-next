import InputField from "@/ui/InputField";
import { FieldValues, useForm } from "react-hook-form";
import Button from "@/ui/Button";
import { useCreateCategory } from "@/hooks/category/useCategory";
import FormWrapper from "@/components/FormWrapper";

type CategoryItemType = {
  _id: string;
  title: string;
  englishTitle: string;
  description: string;
  slug: string;
};

type CateogoryType = {
  onClose: () => void;
  categoryToEdit?: CategoryItemType;
};

const CategoryForm = ({ onClose, categoryToEdit }: CateogoryType) => {
  const { _id: categoryId } = (categoryToEdit as CategoryItemType) || "";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { isPending, addCategories } = useCreateCategory();

  const onSubmit = async (values: FieldValues) => {
    await addCategories(values);
    onClose();
  };

  return (
    <FormWrapper className="grid-cols-1" onSubmit={handleSubmit(onSubmit)}>
      <InputField
        register={register}
        errors={errors}
        name="title"
        placeholder="مثال : برنامه نویسی"
        validationSchema={{
          required: "نام دسته بندی ضرروی است",
        }}
        label={"نام دسته بندی"}
      />
      <InputField
        label={"توضیحات"}
        name="description"
        errors={errors}
        placeholder={"توضیحاتی درباره پروژه بنویسید"}
        register={register}
        validationSchema={{
          required: "توضیحات ضرروی است",
          minLength: {
            value: 10,
            message: " توضیحات کوتاه است",
          },
        }}
      />
      <InputField
        label={"عنوان انگلیسی"}
        name="englishTitle"
        dir="ltr"
        errors={errors}
        placeholder={"مثال : design"}
        register={register}
        validationSchema={{
          required: "عنوان انگلیسی ضرروی است",
        }}
      />
      <Button
        title={"ثبت دسته بندی"}
        className={"bg-teal-500 hover:bg-teal-600 text-white text-lg "}
        loading={isPending}
        disabled={isPending}
      />
    </FormWrapper>
  );
};

export default CategoryForm;
