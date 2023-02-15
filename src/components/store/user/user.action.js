import { CreateAction } from "../../../utils/createAction"
import { USER_ACTION_TYPE } from "./user.type"

export const setCurrentUser = (user)=>{
   return CreateAction(USER_ACTION_TYPE.SET_CURRENT_USER, user)
}