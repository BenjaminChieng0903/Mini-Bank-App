import './App.css';
import Navigation from './components/Navigation/navigation';
import Balance from './components/Balance/balance';
import Summary from './components/Summary/summary';
import Transfer from './components/Operation/transfer';
import Loan from './components/Operation/loan';
import Close from './components/Operation/close';
import Movements from './components/Movements/Movements';
import { useSelector } from 'react-redux';
import { selectorIsLogin } from './components/store/IsLogin/isLogin.selector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GetAccounts, setAccountUsername } from './components/store/accounts/accounts.action';
import { accounts } from './script';
import { setCurrentUser } from './components/store/user/user.action';
// import { setIsLogin } from './components/store/IsLogin/islogin.action';

function App() {
  const isLogin = useSelector(selectorIsLogin)
  const dispatch = useDispatch()
  useEffect(()=>{
    //get accounts data/ we use test data right here, maybe we will get the json data
    //from other api.
      dispatch(GetAccounts(accounts))
      //set the username for each data element
      dispatch(setAccountUsername(accounts))

  },[])

  return (
        <div>
        <Navigation></Navigation>
      { isLogin && <main className='app'>
        <Balance/>
        <Movements/>
        <Transfer/>
        <Loan/>
        <Close/>
        </main>
}
        </div>
  );
}

export default App;
