import { LOGIN_ACTION_TYPE } from "./isLogin.type"
const USER_INITIAL_STATE = {
    LoginState: false
}
export const IsLoginReducer = (state = USER_INITIAL_STATE, action)=>{
    const {type , payload} = action
    switch(type){
        case LOGIN_ACTION_TYPE.SET_LOGIN:
         return {...state, LoginState: payload}

         default: return state
    }
}