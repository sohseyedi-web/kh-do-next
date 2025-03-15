import api from "@/services/http";
import { CREATE_CATEGORY, GET_CATEGORY } from "@/services/urls";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";

type CategoryType = {
  _id: string;
  title: string;
  englishTitle: string;
  description: string;
  slug: string;
};

export function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => api.get(GET_CATEGORY),
  });

  const rawCategories: CategoryType[] = data?.data?.data?.categories || [];

  const categories = rawCategories?.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCategories = rawCategories?.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isLoading, categories, transformedCategories };
}
export function useCreateCategory() {
  const queryClient = useQueryClient();
  const { mutateAsync: addCategories, isPending } = useMutation({
    mutationFn: () => api.post(CREATE_CATEGORY),
    onSuccess: (data: FieldValues) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isPending, addCategories };
}
