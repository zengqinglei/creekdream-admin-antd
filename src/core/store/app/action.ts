/** 操作类型 */
export const actionTypes = {
    /** 切换折叠状态 */
    toggleCollapse: 'TOGGLE_COLLAPSE'
};

/** 切换左边栏折叠状态 */
export const toggleCollapse = () => {
    return {
        type: actionTypes.toggleCollapse
    };
}