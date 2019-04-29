import { UserInfo } from "../../models/user-info";

/** 操作类型 */
export const actionTypes = {
  /** 登录 */
  login: "LOGIN",
  /** 注销 */
  logout: "LOGOUT"
};

/** 登录 */
export const login = (user: UserInfo) => {
  return {
    type: actionTypes.login,
    user
  };
};

/** 注销 */
export const logout = () => {
  return {
    type: actionTypes.logout
  };
};
