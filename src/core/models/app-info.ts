/** 应用信息 */
export interface AppInfo {
  [key: string]: any;
  /** 应用名称 */
  name?: string;
  /** 描述 */
  description?: string;
  /** 是否折叠菜单 */
  collapsed: boolean;
}
