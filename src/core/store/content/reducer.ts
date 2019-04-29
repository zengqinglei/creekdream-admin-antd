import { actionTypes } from "./action";

const contentState: {
  /** 是否加载 */
  pending: boolean;
} = {
  pending: true
};

/** 页面内容存储 */
const contentReducer = (state = contentState, action: any) => {
  switch (action.type) {
    case actionTypes.setLoadingState:
      return Object.assign(state, {
        pending: action.pending
      });
    default:
      break;
  }
  return { ...state };
};

export default contentReducer;
