import { actionTypes } from "./action";
import { PermissionInfo } from "../../models/permission-info";

/** 默认权限集合信息 */
const defaultPermissionState: PermissionInfo = {
  resources: []
};

/** 权限存储 */
const permissionReducer = (state = defaultPermissionState, action: any) => {
  switch (action.type) {
    case actionTypes.setPermissions:
      return Object.assign(state, {
        resources: action.resources
      });
    default:
      break;
  }
  return { ...state };
};

export default permissionReducer;
