import './operationStyle.css'
// import { accounts } from '../../script'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectorCurrentUser } from '../store/user/user.selector'
import { reformatUserName } from '../Navigation/navigation'
import { CalBalance } from '../../utils/calBalance'
import { filteredUserByusername } from '../../utils/filterUser'
import { findUserByusername } from '../../utils/findUser'
import { selectorAccounts } from '../store/accounts/accounts.selector'
import { setTransfer } from '../store/accounts/accounts.action'
import { setCurrentUser, setCurrentUserTransfer } from '../store/user/user.action'
const Transfer = ()=>{
    const accounts = useSelector(selectorAccounts)
    const [transferTo, setTransferTo] = useState('')
    const [amount, setAmount] = useState('')
    const currentUser = useSelector(selectorCurrentUser)
    const dispatch = useDispatch()
    const transferFunction = function (e){
        e.preventDefault()
        console.log(transferTo)
        const amountNum = +amount
        console.log(amountNum)
        console.log(CalBalance(currentUser))
        if( 0 < amountNum && amountNum < CalBalance(currentUser)){
        dispatch(setCurrentUserTransfer(currentUser, amountNum))
        dispatch(setTransfer(accounts, currentUser.username, transferTo, amountNum))
        }
        // reformatUserName(accounts)
        // const receivedPerson = accounts.find((acc)=> acc.username && acc.username === transferTo)
        // console.log(receivedPerson)
        // if (receivedPerson && 0 < amountNum < CalBalance(currentUser)){
        //     currentUser.movements.push(-amountNum);
        //     receivedPerson.movements.push(amountNum)
            // window.location.reload()
            // const AfterReceive = receivedPerson.movements.push(+amountNum)
        // }
    }

    return (
        <div className="operation operation--transfer">
        <h2>Transfer money</h2>
        <form  className="form form--transfer">
          <input onChange={(e)=>setTransferTo(e.target.value)} type="text" className="form__input form__input--to" />
          <input onChange={(e)=>setAmount(e.target.value)} type="number" className="form__input form__input--amount" />
          <button onClick={(e)=>transferFunction(e)} className="form__btn form__btn--transfer">&rarr;</button>
          <label className="form__label">Transfer to</label>
          <label className="form__label">Amount</label>
        </form>
      </div>
    )
}

export default Transfer