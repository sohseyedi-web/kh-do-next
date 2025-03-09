import api from "@/services/http";
import { LOGIN, REGISTER } from "@/services/urls";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";

export const useAuthHook = (isRegister: boolean) => {
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (values: FieldValues) => {
      const endpoint = isRegister ? REGISTER : LOGIN;
      const { data } = await api.post(endpoint, values);
      return data;
    },
    onSuccess: (values: FieldValues) => {
      toast.success(values?.data?.message);
      router.push("/panel");
    },
    onError: (error: any) => {
      console.error("❌:", error.response?.data?.message || "مشکلی پیش آمد!");
      toast.error(error.response?.data?.message);
    },
  });

  return { mutateAsync, isPending };
};
