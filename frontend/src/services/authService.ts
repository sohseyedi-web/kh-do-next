import api from "./http";
import { GET_ALL_USERS } from "./urls";

export async function getAllUsersApi(options: any) {
  return api.get(GET_ALL_USERS, options).then(({ data }) => data.data);
}
