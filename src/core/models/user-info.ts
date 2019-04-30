/** 用户信息 */
export interface UserInfo {
  /** 唯一主键 */
  id: string;
  /** 用户名 */
  username: string;
  /** 姓名 */
  name?: string;
  /** 头像 */
  avatar?: string;
  /** 邮箱 */
  email?: string;
  /** 角色集合 */
  rolename?: string;
  /** 组织Id */
  organizeid?: string;
  /** 组织集合 */
  organizename?: string;
}
