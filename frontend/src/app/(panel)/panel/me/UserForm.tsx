"use client";

import Loading from "@/ui/Loading";
import InputField from "@/ui/InputField";
import { FieldValues, useForm } from "react-hook-form";
import { useDetailUser, useUpdateUser } from "@/hooks/users/useGetUser";
import Button from "@/ui/Button";
import FormWrapper from "@/components/FormWrapper";

const UserForm = () => {
  let userDetails = {};
  const { user, isLoading } = useDetailUser();

  const { updateUserProfile, isUpdating } = useUpdateUser();
  userDetails = {
    username: user?.username,
    email: user?.email,
    biography: user?.biography,
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: userDetails,
  });

  const onSubmit = async (values: FieldValues) => {
    await updateUserProfile(values);
  };

  if (isLoading && user) return <Loading />;

  return (
    <FormWrapper
      onSubmit={handleSubmit(onSubmit)}
      className="lg:grid-cols-2 grid-cols-1 gap-3 lg:w-[50%] w-[95%]"
    >
      <InputField
        label={"نام کاربری"}
        name={"username"}
        errors={errors}
        register={register}
        validationSchema={{
          required: "نام کاربری ضرروی است",
        }}
      />
      <InputField
        label={"ایمیل"}
        name={"email"}
        errors={errors}
        register={register}
        validationSchema={{
          required: "ایمیل ضرروی است",
        }}
      />

      <div className="lg:col-span-2">
        <InputField
          label={"اطلاعات بیشتر"}
          name={"biography"}
          errors={errors}
          register={register}
          placeholder={"اطلاعات بیشتری از خودت بنویس"}
          long={true}
        />
      </div>
      <Button
        disabled={isUpdating}
        title={"ویرایش اطلاعات"}
        loading={isUpdating}
        className="md:text-lg transition-colors text-white hover:bg-purple-600 bg-purple-500 lg:col-span-2 w-full"
      />
    </FormWrapper>
  );
};

export default UserForm;
