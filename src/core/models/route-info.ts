import { MenuInfo } from "./menu-info";
import { Breadcrumb } from "./breadcrumb";

/** 路由信息 */
export interface RouteInfo {
  menus: MenuInfo[];
  routePath: string;
  breadcrumbs: Breadcrumb[];
}
