import { userReducer } from "./user/user.reducer";
import { IsLoginReducer } from "./IsLogin/isLogin.reducer";
import { AccountsReducer } from "./accounts/accounts.reducer";
import { combineReducers } from "redux";
export const rootReducer = combineReducers({
    user: userReducer,
    isLogin:IsLoginReducer,
    accounts: AccountsReducer
})