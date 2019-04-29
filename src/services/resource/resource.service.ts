import { axios } from "../../core/net/default.interceptor";

const SERVER_URL = "/data";

/** 获取拥有的资源权限码 */
export const getResources = async (userId: string) => {
  const url = `${SERVER_URL}/resources.json?userId=${userId}`;
  return axios.get<string[]>(url);
};
