import { combineReducers } from "redux";
import authReducer from "./auth";
import notificationReducer from "./notificationReducer";
import userProfile from "./client";

const appReducer = combineReducers({
  client: userProfile,
  auth: authReducer,
  notification: notificationReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") return appReducer(undefined, action);
  return appReducer(state, action);
};
export default rootReducer;
