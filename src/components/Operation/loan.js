import { useState } from 'react'
import './operationStyle.css'
import { useSelector } from 'react-redux'
import { selectorCurrentUser } from '../store/user/user.selector'
import { useDispatch } from 'react-redux'
import { setCurrentUserLoan } from '../store/user/user.action'
import { CalBalance } from '../../utils/calBalance'
import { setLoan } from '../store/accounts/accounts.action'
import { selectorAccounts } from '../store/accounts/accounts.selector'
const Loan = ()=>{

const [loanAmount, setLoanAmount] = useState('')
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const currentUser = useSelector(selectorCurrentUser)
const accounts = useSelector(selectorAccounts)
const dispatch = useDispatch()
const LoanMoney = (e)=>{
    e.preventDefault()
    const balance = CalBalance(currentUser)
    if (+loanAmount <= 10 *balance && +loanAmount > 0){
        inputLoanAmount.value = ''
        dispatch(setCurrentUserLoan(currentUser, +loanAmount))
        dispatch(setLoan(accounts, currentUser , +loanAmount ))
    }
}
    return (
        <div className="operation operation--loan">
        <h2>Request loan</h2>
        <form className="form form--loan">
          <input onChange={(e)=>{setLoanAmount(e.target.value)}} type="number" className="form__input form__input--loan-amount" />
          <button onClick={(e)=>LoanMoney(e)} className="form__btn form__btn--loan">&rarr;</button>
          <label className="form__label form__label--loan">Amount</label>
        </form>
      </div>
    )
}

export default Loan