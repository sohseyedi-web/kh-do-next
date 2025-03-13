import api from "@/services/http";
import { GET_CATEGORY } from "@/services/urls";
import { useQuery } from "@tanstack/react-query";

type CategoryType = {
  _id: string;
  title: string;
  englishTitle: string;
  description: string;
  slug: string;
};

export default function useCategories() {
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
