import { useState } from 'react'
import './navigationStyle.css'
import '../../script'
import accounts from '../../script'
import { containerApp, inputLoginUsername, inputLoginPin } from '../../script'
const Navigation = ()=>{
const [user, setUser] = useState('')
const [pin, setPin] = useState('')
const reformatUserName = (accs)=>{
    accs.forEach((acc)=> {
        acc.username = (acc.owner.toLowerCase().split(' ').map((item)=> item[0]).join('')) 
    })
}


const Login = function (e){
    e.preventDefault()
    reformatUserName(accounts)
    console.log(accounts)
    const filteredUser = accounts.filter((account)=> account.username === user)
    filteredUser.forEach((currentUser)=>{
           if(currentUser.pin === +pin){
            containerApp.style.opacity = 100
    }
    })
    inputLoginUsername.value = ''
    inputLoginPin.value = ''
 
}

    return  (
    <nav>
    <p className="welcome">Log in to get started</p>
    <img src="../../logo.png" alt="Logo" className="logo" />
    <form className="login">
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