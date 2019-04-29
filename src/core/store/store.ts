import { createStore, combineReducers } from "redux";
import appReducer from "./app/reducer";
import userReducer from "./user/reducer";
import contentReducer from "./content/reducer";
import routeReducer from "./route/reducer";
import permissionReducer from "./permission/reducer";

const reducers = combineReducers({
  appState: appReducer,
  userState: userReducer,
  routeState: routeReducer,
  permissionState: permissionReducer,
  contentState: contentReducer
});

const store = createStore(reducers);
export default store;
