import { useState } from 'react'
import './navigationStyle.css'
import '../../script'
import { setCurrentUser } from '../store/user/user.action';
import { setIsLogin } from '../store/IsLogin/islogin.action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectorCurrentUser } from '../store/user/user.selector';
import { filteredUser, filteredUserByusername } from '../../utils/filterUser';
import { findUserByusername } from '../../utils/findUser';
import { setAccountUsername } from '../store/accounts/accounts.action';
import { selectorAccounts } from '../store/accounts/accounts.selector';
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
// const containerApp = document.querySelector('.app');
// export const reformatUserName = (accs)=>{
//     accs.forEach((acc)=> {
//         acc.username = (acc.owner.toLowerCase().split(' ')
//         .map((item)=> item[0]).join('')) 
//     })
// }

const Navigation = ()=>{
const [user, setUser] = useState('')
const [pin, setPin] = useState('')
const currentUser = useSelector(selectorCurrentUser)
const accounts = useSelector(selectorAccounts)
const dispatch = useDispatch()
// console.log(accounts)
const Login = function (e){
    // reformatUserName(accounts)
    e.preventDefault()
    console.log(accounts)
    // console.log(accounts)
    // console.log(containerApp)
    // console.log(inputLoginUsername)
    // console.log(inputLoginPin)
    // const currentUser = findUserByusername(accounts, user)
    const currentUser = accounts.find((acc)=>acc.username&& acc.username === user )
    // console.log(user)
    console.log(currentUser)
           if(currentUser.pin === +pin){
            
            inputLoginPin.value =''
            inputLoginUsername.value =''
            // log in successfully, set current user and display individual surface
           dispatch(setCurrentUser(currentUser)) 
           dispatch(setIsLogin(true))

    }
    // inputLoginUsername.value = ''
    // inputLoginPin.value = ''
 
}

    return  (
    <nav>
        {currentUser ? <p className="welcome">
        hello {currentUser.owner}!</p> : <p className="welcome">
        Log in to get started</p>}
    <img src="../../logo.png" alt="Logo" className="logo" />
    <form  className="login">
      <input
      onChange={(e)=>{setUser(e.target.value)}}
        type="text"
        placeholder="user"
        className="login__input login__input--user"
      />
      <input
      onChange={(e)=>{setPin(e.target.value)}}
        type="text"
        placeholder="PIN"
        maxLength="4"
        className="login__input login__input--pin"
      />
      <button onClick={(e)=>Login(e)} className="login__btn">&rarr;</button>
    </form>

  </nav>
  )
}

export default Navigation