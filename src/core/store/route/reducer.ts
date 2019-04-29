import { actionTypes } from "./action";
import { MenuInfo } from "../../models/menu-info";
import { RouteInfo } from "../../models/route-info";
import { Breadcrumb } from "../../models/breadcrumb";

/** 默认菜单路由信息 */
const defaultRouteState: RouteInfo = {
  menus: [],
  routePath: "",
  breadcrumbs: []
};

const getBreadcrumbByUrl = (menus: MenuInfo[], url: string) => {
  const breadcrumbs: Breadcrumb[] = [
    {
      breadcrumbName: "首页",
      path: "/",
      icon: "home"
    }
  ];
  let findItem!: MenuInfo;
  const callback = (menu: MenuInfo) => {
    if (menu.url && menu.url === url) {
      findItem = menu;
    }
  };
  while (url) {
    visitMenus(menus, callback);
    if (findItem) {
      break;
    }
    url = url
      .split("/")
      .slice(0, -1)
      .join("/");
  }

  if (findItem) {
    while (findItem) {
      breadcrumbs.splice(1, 0, {
        breadcrumbName: findItem.title,
        path: findItem.url,
        icon: findItem.icon
      });
      findItem = findItem._parent;
    }
  }
  return breadcrumbs;
};

export function visitMenus(
  data: MenuInfo[],
  callback: (
    menu: MenuInfo,
    parentMenu: MenuInfo | null,
    level?: number
  ) => void
) {
  const inFn = (
    menus: MenuInfo[],
    parentMenu: MenuInfo | null,
    level: number
  ) => {
    menus.forEach(menu => {
      if (callback) {
        callback(menu, parentMenu, level);
      }
      if (menu.children) {
        inFn(menu.children, menu, level + 1);
      }
    });
  };
  inFn(data, null, 1);
}

function formatMenus(items: MenuInfo[]) {
  visitMenus(items, (menu, parentMenu, level) => {
    if (!menu._level) {
      menu._level = level;
    }
    if (!menu._parent) {
      menu._parent = parentMenu;
    }
  });
  return items;
}

/** 路由存储 */
const routeReducer = (state = defaultRouteState, action: any) => {
  switch (action.type) {
    case actionTypes.setMenus:
      return Object.assign(state, {
        menus: formatMenus(action.menus),
        breadcrumbs: getBreadcrumbByUrl(action.menus, state.routePath)
      });
    case actionTypes.redirectRoute:
      return Object.assign(state, {
        routePath: action.routePath,
        breadcrumbs: getBreadcrumbByUrl(state.menus, action.routePath)
      });
    default:
      break;
  }
  return { ...state };
};

export default routeReducer;
