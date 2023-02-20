import {  useSelector } from 'react-redux'
import './balanceStyle.css'
import { selectorCurrentUser } from '../store/user/user.selector'
import { CalBalance } from '../../utils/calBalance'
const Balance = ()=>{
    const currentUser = useSelector(selectorCurrentUser)
    // const balance = currentUser.movements.reduce((acc, item)=>{
    //     return acc + item;
    // }, 0)
    const balance = CalBalance(currentUser)
    // currentUser.balance = balance
    // console.log(currentUser)
    return (
        <div className="balance">
        <div>
          <p className="balance__label">Current balance</p>
          <p className="balance__date">
            As of <span className="date">05/03/2037</span>
          </p>
        </div>
        <p className="balance__value">${balance}</p>
      </div>
    )
}

export default Balance