import { createPostApi, editPostApi } from "@/services/postService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function useCreatePost() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createPost } = useMutation({
    mutationFn: createPostApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },

    onError: (err: any) => toast.error(err?.response?.data?.message),
  });

  return { isCreating, createPost };
}

export function useEditPost() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editPost } = useMutation({
    mutationFn: editPostApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isEditing, editPost };
}
