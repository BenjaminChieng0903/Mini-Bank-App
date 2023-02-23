import './operationStyle.css'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLogin } from '../store/IsLogin/islogin.action'
import { setCurrentUser } from '../store/user/user.action'
import { useState } from 'react'
import { selectorCurrentUser } from '../store/user/user.selector'
import { selectorAccounts } from '../store/accounts/accounts.selector'
import { deleteAccount } from '../store/accounts/accounts.action'
const Close = ()=>{
    const dispatch = useDispatch()
    const [confirmUser, setConfirmUser] = useState('')
    const [confirmPin, setConfirmPin] = useState('')
    const currentUser = useSelector(selectorCurrentUser)
    const accounts = useSelector(selectorAccounts)
    const Logout = ()=>{
        dispatch(setIsLogin(false))
        dispatch(setCurrentUser(null))
    }
    const deleteAcc = (e)=>{
        e.preventDefault()
        console.log(confirmUser, confirmPin)
        if (confirmUser === currentUser.username && +confirmPin === currentUser.pin){
            // delete from accounts array
            dispatch(deleteAccount(accounts, confirmUser))
            // delete current user
            dispatch(setCurrentUser(null))
            // set page to be invisible
            dispatch(setIsLogin(false))
        }
    }
    return (
        <>
        <div className="operation operation--close">
        <h2>Close account</h2>
        <form className="form form--close">
          <input onChange={(e)=>{setConfirmUser(e.target.value) }} type="text" className="form__input form__input--user" />
          <input
          onChange={(e)=>{setConfirmPin(e.target.value) }}
            type="password"
            maxlength="6"
            className="form__input form__input--pin"
          />
          <button onClick={(e)=>deleteAcc(e)} className="form__btn form__btn--close">&rarr;</button>
          <label  className="form__label">Confirm user</label>
          <label  className="form__label">Confirm PIN</label>
        </form>
      </div>
      <button onClick={Logout} className='logout'>Logout</button>
      </>
    )
}

export default Close