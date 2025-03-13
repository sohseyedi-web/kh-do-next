import { FieldValues } from "react-hook-form";
import api from "./http";

export async function getAllPostsApi(queries: any, options = {}) {
  return api
    .get(`/post/list?${queries}`, options)
    .then(({ data }) => data.data);
}

export async function getPostById(id: string) {
  return api.get(`/post/${id}`).then(({ data }) => data);
}

export async function createPostApi(data: FieldValues) {
  return api.post(`/post/create`, data).then(({ data }) => data.data);
}

export async function editPostApi({
  id,
  data,
}: {
  id: string;
  data: FieldValues;
}) {
  return api.patch(`/post/update/${id}`, data).then(({ data }) => data.data);
}

export async function deletePostApi(id: string, options = {}) {
  return api
    .delete(`/post/remove/${id}`, options)
    .then(({ data }) => data.data);
}

export async function likePostApi(id: string) {
  return api.post(`/post/like/${id}`).then(({ data }) => data.data);
}
