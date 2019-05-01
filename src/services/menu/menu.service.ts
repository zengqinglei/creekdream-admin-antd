import { MenuInfo } from "../../core/models/menu-info";
import { axios } from "../../core/net/default.interceptor";
import { environment } from "../../environments/environment";

const SERVER_URL = `${environment.SERVER_URL}asserts/data/menus.json`;

/** 获取菜单数据 */
export const getMenus = async (userId: string) => {
  const url = `${SERVER_URL}?userId=${userId}`;
  return axios.get<MenuInfo[]>(url);
};
