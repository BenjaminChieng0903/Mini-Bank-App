import { ACCOUNTS_TYPE } from "./accounts.type"
const ACCOUNTS_INITIAL_STATE = {
    accounts:[]
}
export const AccountsReducer = (state = ACCOUNTS_INITIAL_STATE, action)=>{
    const {type , payload} = action
    switch(type){
        case ACCOUNTS_TYPE.GET_ACCOUNTS:
         return {...state, accounts: payload}
        case ACCOUNTS_TYPE.SET_TRANSFER:
            return {...state, accounts: payload}
        case ACCOUNTS_TYPE.SET_USERNAME:
            return {...state, accounts:payload}
        case ACCOUNTS_TYPE.SET_LOAN:
            return {...state, accounts:payload}
        case ACCOUNTS_TYPE.DELETE_ACCOUNT:
            return {...state, accounts:payload}
         default: return state
    }
}