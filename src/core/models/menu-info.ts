/** 菜单信息 */
export interface MenuInfo {
    /** 
     * _open: boolean       是否展开
     * _selected: boolean   是否选中
     */
    [key: string]: any;
    /** 唯一Id */
    id:string,
    /** 文本 */
    title: string;
    /** 图标 */
    icon?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 路由地址 */
    url: string;
    /** 子菜单 */
    children?: MenuInfo[];
}