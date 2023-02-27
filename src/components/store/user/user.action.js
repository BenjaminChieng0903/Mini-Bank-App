import { CreateAction } from "../../../utils/createAction"
import { USER_ACTION_TYPE } from "./user.type"

export const setCurrentUser = (user)=>{
   return CreateAction(USER_ACTION_TYPE.SET_CURRENT_USER, user)
}

export const setCurrentUserTransfer = ({username, pin, interestRate, owner, movements}, transferAmount)=>{
    return CreateAction(USER_ACTION_TYPE.SET_CURRENT_TRANSFER, {username, pin, interestRate, owner,
       'movements':[...movements, -transferAmount]} )
}
export const setCurrentUserLoan = ({username, pin, interestRate, owner, movements}, loanAmount)=>{
    return CreateAction(USER_ACTION_TYPE.SET_CURRENT_LOAN, {username, pin, interestRate, owner,
        'movements':[...movements, loanAmount]})
}
// export const movementsSort = ({username, pin, interestRate, owner, movements})=> {
//     const sortedMovements = movements.sort((a,b)=>b-a)
//     return CreateAction(USER_ACTION_TYPE.SORT_MOVEMENTS, {username, pin, interestRate, owner, 
//     'movements': sortedMovements} )
// }

// export const MovementUnsort = (currentUser)=>{

//     return CreateAction()
// }