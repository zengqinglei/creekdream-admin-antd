import { MenuInfo } from "../../models/menu-info";

/** 操作类型 */
export const actionTypes = {
  /** 设置菜单 */
  setMenus: "SET_MENUS",
  /** 导航路由地址 */
  redirectRoute: "REDIRECT_ROUTE"
};

/** 设置菜单信息 */
export const setMenus = (item: MenuInfo[]) => {
  return {
    type: actionTypes.setMenus,
    menus: item
  };
};

/** 导航路由地址 */
export const redirectRoute = (routePath: string) => {
  return {
    type: actionTypes.redirectRoute,
    routePath
  };
};
