import { CreateAction } from "../../../utils/createAction"
import { LOGIN_ACTION_TYPE } from "./isLogin.type"

export const setIsLogin = (loginState)=>{
   return CreateAction(LOGIN_ACTION_TYPE.SET_LOGIN, loginState)
}