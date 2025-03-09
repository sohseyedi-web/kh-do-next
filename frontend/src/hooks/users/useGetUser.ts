import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { USER_PROFILE, LOG_OUT } from "@/services/urls";
import api from "@/services/http";

export const useDetailUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => api.get(USER_PROFILE),
    retry: false,
  });

  const user = data?.data?.data?.user || {};

  return { user, isLoading };
};

export const useLogOut = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: logOut, isPending } = useMutation({
    mutationFn: () => api.post(LOG_OUT),
    onSuccess: () => {
      queryClient.removeQueries();
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { logOut, isPending };
};
