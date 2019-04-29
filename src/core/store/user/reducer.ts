import { UserInfo } from "../../models/user-info";
import { actionTypes } from "./action";

const USER = "user";

/** 读取缓存中用户信息 */
function getUser(): UserInfo | null {
  const userStr = localStorage.getItem(USER);
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
}

/** 清除缓存的用户信息 */
export function clearUser() {
  localStorage.removeItem(USER);
}

const defaultUserState = getUser();

/** 用户信息存储 */
const userReducer = (state = defaultUserState, action: any) => {
  switch (action.type) {
    case actionTypes.login:
      const newState = Object.assign(state || {}, action.user);
      localStorage.setItem(USER, JSON.stringify(newState));
      return newState;
    case actionTypes.logout:
      clearUser();
      return null;
    default:
      break;
  }
  return { ...state };
};

export default userReducer;
