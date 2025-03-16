export const REGISTER = `/user/signup`;
export const LOGIN = `/user/signin`;
export const USER_PROFILE = `/user/profile`;
export const LOG_OUT = `/user/logout`;
export const GET_ALL_USERS = `/user/list`;
export const UPDATE_USER = `/user/update`;

export const GET_CATEGORY = `/category/list`;
export const CREATE_CATEGORY = `/category/add`;
export const REMOVE_CATEGORY = (id : string) => `/category/remove/${id}`;
