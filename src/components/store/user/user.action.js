import { CreateAction } from "../../../utils/createAction"
import { USER_ACTION_TYPE } from "./user.type"

export const setCurrentUser = (user)=>{
   return CreateAction(USER_ACTION_TYPE.SET_CURRENT_USER, user)
}

export const setCurrentUserTransfer = ({username, pin, interestRate, owner, movements}, amount)=>{
    return CreateAction(USER_ACTION_TYPE.SET_CURRENT_TRANSFER, {username, pin, interestRate, owner,
       'movements':[...movements, -amount]} )
}