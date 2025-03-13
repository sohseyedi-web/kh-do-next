import { FieldValues } from "react-hook-form";
import http from "./http";

export async function getAllPostsApi(queries: any, options = {}) {
  return http
    .get(`/post/list?${queries}`, options)
    .then(({ data }) => data.data);
}

export async function getPostById(id: string) {
  return http.get(`/post/${id}`).then(({ data }) => data);
}

export async function createPostApi(data: FieldValues) {
  return http.post(`/post/create`, data).then(({ data }) => data.data);
}

export async function editPostApi({
  id,
  data,
}: {
  id: string;
  data: FieldValues;
}) {
  return http.patch(`/post/update/${id}`, data).then(({ data }) => data.data);
}

export async function deletePostApi(id: string, options = {}) {
  return http
    .delete(`/post/remove/${id}`, options)
    .then(({ data }) => data.data);
}

export async function likePostApi(id: string) {
  return http.post(`/post/like/${id}`).then(({ data }) => data.data);
}
