import Loading from "@/ui/Loading";
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
  let isUpdating = false;
  const { _id: categoryId } = categoryToEdit as CategoryItemType;
  const { englishTitle, title, description } =
    categoryToEdit as CategoryItemType;
  const isCategorySession = Boolean(categoryId);
  let editValues = {};

  if (isCategorySession) {
    editValues = {
      englishTitle,
      title,
      description,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: editValues });
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
        errors={errors}
        placeholder={"مثال : design"}
        register={register}
        validationSchema={{
          required: "عنوان انگلیسی ضرروی است",
        }}
      />
      <Button
        className={isCategorySession ? "btn btn-primary" : "bg-red-600"}
        loading={isCategorySession ? isUpdating : isPending}
        title={isCategorySession ? "ویرایش دسته بندی" : "ثبت دسته بندی"}
        disabled={isCategorySession ? isUpdating : isPending}
      />
    </FormWrapper>
  );
};

export default CategoryForm;
