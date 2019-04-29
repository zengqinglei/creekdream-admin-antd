import { axios } from "../../core/net/default.interceptor";
import { MenuInfo } from "../../core/models/menu-info";

const SERVER_URL = "/data";

/** 获取菜单数据 */
export const getMenus = async (userId: string) => {
  const url = `${SERVER_URL}/menus.json?userId=${userId}`;
  return axios.get<MenuInfo[]>(url);
};
