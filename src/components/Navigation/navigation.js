import { useState } from 'react'
import './navigationStyle.css'
import '../../script'
import { accounts} from '../../script'
import { setCurrentUser } from '../store/user/user.action';
import { setIsLogin } from '../store/IsLogin/islogin.action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectorCurrentUser } from '../store/user/user.selector';
// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const containerApp = document.querySelector('.app');
const Navigation = ()=>{
const [user, setUser] = useState('')
const [pin, setPin] = useState('')
const dispatch = useDispatch()
const currentUser = useSelector(selectorCurrentUser)
const reformatUserName = (accs)=>{
    accs.forEach((acc)=> {
        acc.username = (acc.owner.toLowerCase().split(' ').map((item)=> item[0]).join('')) 
    })
}
// const handleSubmit = (e)=>{
//     e.preventDefault()

// }

const Login = function (){
    reformatUserName(accounts)
    console.log(accounts)
    // console.log(containerApp)
    // console.log(inputLoginUsername)
    // console.log(inputLoginPin)
    const filteredUser = accounts.filter((account)=> account.username === user)
    filteredUser.forEach((currentUser)=>{
           if(currentUser.pin === +pin){
            // containerApp.style.opacity = 100
            
            //display UI
            console.log(currentUser)
           dispatch(setCurrentUser(currentUser)) 
           dispatch(setIsLogin(true))
            // setIsLogin(true)

    }
    })
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
      <button onClick={Login} className="login__btn">&rarr;</button>
    </form>

  </nav>
  )
}

export default Navigation