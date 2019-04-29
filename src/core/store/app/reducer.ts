import { AppInfo } from "../../models/app-info";
import { actionTypes } from "./action";

const APP = "APP";

/** 读取缓存中应用信息 */
function getApp(): AppInfo {
  const appStr = localStorage.getItem(APP);
  if (appStr) {
    return JSON.parse(appStr);
  }
  return {
    name: "后台管理",
    description: "统一应用后台管理描述",
    collapsed: false
  };
}

const defaultAppState = getApp();

/** 应用信息存储 */
const appReducer = (state: AppInfo = defaultAppState, action: any) => {
  switch (action.type) {
    case actionTypes.toggleCollapse:
      const newState = Object.assign(state, {
        collapsed: !state.collapsed
      });
      localStorage.setItem(APP, JSON.stringify(newState));
      return newState;
    default:
      break;
  }
  return { ...state };
};

export default appReducer;
