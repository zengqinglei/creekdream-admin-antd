/** 操作类型 */
export const actionTypes = {
  /** 设置权限 */
  setPermissions: "SET_PERMISSIONS"
};

/** 设置权限 */
export const setPermissions = (item: string[]) => {
  return {
    type: actionTypes.setPermissions,
    resources: item
  };
};
