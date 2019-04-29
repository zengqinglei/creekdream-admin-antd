/** 内容区域加载状态 */
export const actionTypes = {
    /** 设置加载状态 */
    setLoadingState: "SET_LOADING_STATE"
};

/** 设置加载状态 */
export const setLoadingState = (pending: boolean) => {
    return {
        type: actionTypes.setLoadingState,
        pending
    };
}