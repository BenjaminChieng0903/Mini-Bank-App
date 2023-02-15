import { userReducer } from "./user/user.reducer";
import { IsLoginReducer } from "./IsLogin/isLogin.reducer";
import { combineReducers } from "redux";
export const rootReducer = combineReducers({
    user: userReducer,
    isLogin:IsLoginReducer
})