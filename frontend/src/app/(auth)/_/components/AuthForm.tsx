import { FieldValues, useForm } from "react-hook-form";
import InputField from "@/ui/InputField";
import Button from "@/ui/Button";
import { useAuthHook } from "@/hooks/auth/useAuthHook";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AuthForm = ({ isRegister }: { isRegister: boolean }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>();

  const { isPending, mutateAsync } = useAuthHook(isRegister);

  const onSubmit = async (values: FieldValues) => {
    const daata = await mutateAsync(values);
    console.log(daata);
  };

  useEffect(() => {
    reset();
  }, [isRegister]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
      <AnimatePresence mode="wait">
        {isRegister ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <InputField
              name="username"
              placeholder="نام کاربری خودت رو وارد کن"
              register={register}
              label="نام کاربری"
              errors={errors}
              validationSchema={{ required: "نام کاربریت رو لازم دارم" }}
            />
            <InputField
              type="email"
              name="email"
              placeholder="Example@gmail.com"
              register={register}
              label="ایمیل"
              errors={errors}
              validationSchema={{ required: "ایمیلت رو لازم داریم حتما" }}
            />
            <InputField
              type="password"
              name="password"
              placeholder="رمز قوی بنویس"
              register={register}
              label="رمز عبور"
              errors={errors}
              validationSchema={{ required: "رمز رو کامل بنویس  " }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="register"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <InputField
              type="email"
              name="email"
              placeholder="Example@gmail.com"
              register={register}
              label="ایمیل"
              errors={errors}
              validationSchema={{ required: "ایمیلت رو لازم داریم حتما" }}
            />
            <InputField
              type="password"
              name="password"
              placeholder="رمز قوی بنویس"
              register={register}
              label="رمز عبور"
              errors={errors}
              validationSchema={{ required: "رمز رو کامل بنویس  " }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        title={!isRegister ? "ورود به سایت" : "ثبت نام در سایت"}
        className={`md:text-lg transition-colors hover:bg-teal-500 bg-teal-400`}
        loading={isPending}
        disabled={isPending}
      />
    </form>
  );
};

export default AuthForm;
