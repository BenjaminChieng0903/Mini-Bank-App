import { CreateAction } from "../../../utils/createAction"
import { findUserByusername } from "../../../utils/findUser"
import { findUserIndexByusername } from "../../../utils/findUserIndex"
import { ACCOUNTS_TYPE } from "./accounts.type"

export const GetAccounts = (accounts)=>{
   return CreateAction(ACCOUNTS_TYPE.GET_ACCOUNTS, accounts)
}

export const setTransfer = (accounts, currentUser, transferTo, amount)=>{
    // accounts.find((acc)=>acc.)
   const transfer = accounts.map(({interestRate, username, movements, pin, owner})=>{
        if(username === transferTo){
       return {interestRate, username,pin, owner,'movements':[...movements, amount]}}
        if (username === currentUser){
       return {interestRate, username,pin, owner,'movements':[...movements, -amount]}}  
        else  return {interestRate, username, movements, pin, owner}
   }  )
   return CreateAction(ACCOUNTS_TYPE.SET_TRANSFER, transfer)
}
export const setLoan = (accounts, currentUser, amount)=>{
    const loan = accounts.map(
        ({interestRate, username, movements, pin, owner})=>
        username === currentUser.username ? {interestRate, username,pin, owner,'movements':[...movements, amount]}
        :{interestRate, username, movements, pin, owner}
    )
    return CreateAction(ACCOUNTS_TYPE.SET_LOAN, loan)
}

 const FindUser = (accounts)=>{
    return accounts.map((acc)=>{
        return {...acc, 'username':acc.owner.toLowerCase().split(' ')
    .map((item)=> item[0]).join('')}
 })
}
export const setAccountUsername = (accounts)=>{
    const account = FindUser(accounts)

    // account.username = user
    // console.log(accountsWithUsername)
    return CreateAction(ACCOUNTS_TYPE.SET_USERNAME, account)
}


export const deleteAccount = (accs, username)=>{

    const deletedAccountIndex = findUserIndexByusername(accs, username)
    accs.splice(deletedAccountIndex, 1)

    return CreateAction(ACCOUNTS_TYPE.DELETE_ACCOUNT, accs)
}