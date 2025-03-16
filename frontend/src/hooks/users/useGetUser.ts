import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { USER_PROFILE, LOG_OUT, UPDATE_USER } from "@/services/urls";
import api from "@/services/http";
import { FieldValues } from "react-hook-form";

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

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: updateUserProfile, isPending: isUpdating } = useMutation(
    {
      mutationFn: (data: FieldValues) => api.patch(UPDATE_USER, data),
      onSuccess: (data: FieldValues) => {
        toast.success(data.message);
        queryClient.invalidateQueries({
          queryKey: ["user"],
        });
      },
      onError: (err: any) => {
        toast.error(err?.response?.data?.message);
      },
    }
  );

  return { updateUserProfile, isUpdating };
};
