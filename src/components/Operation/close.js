import './operationStyle.css'
import { useDispatch } from 'react-redux'
import { setIsLogin } from '../store/IsLogin/islogin.action'
import { setCurrentUser } from '../store/user/user.action'
const Close = ()=>{
    const dispatch = useDispatch()
    const Logout = ()=>{
        dispatch(setIsLogin(false))
        dispatch(setCurrentUser(null))
    }
    return (
        <>
        <div className="operation operation--close">
        <h2>Close account</h2>
        <form className="form form--close">
          <input type="text" className="form__input form__input--user" />
          <input
            type="password"
            maxlength="6"
            className="form__input form__input--pin"
          />
          <button className="form__btn form__btn--close">&rarr;</button>
          <label className="form__label">Confirm user</label>
          <label className="form__label">Confirm PIN</label>
        </form>
      </div>
      <button onClick={Logout} className='logout'>Logout</button>
      </>
    )
}

export default Close