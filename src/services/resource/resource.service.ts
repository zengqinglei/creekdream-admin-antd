import { axios } from "../../core/net/default.interceptor";
import { environment } from "../../environments/environment";

const SERVER_URL = `${environment.SERVER_URL}asserts/data/resources.json`;

/** 获取拥有的资源权限码 */
export const getResources = async (userId: string) => {
  const url = `${SERVER_URL}?userId=${userId}`;
  return axios.get<string[]>(url);
};
