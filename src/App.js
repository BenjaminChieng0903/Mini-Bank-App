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
// import { setIsLogin } from './components/store/IsLogin/islogin.action';

function App() {
  const isLogin = useSelector(selectorIsLogin)
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(GetAccounts(accounts))
      dispatch(setAccountUsername(accounts))
  },[])

  return (
        <div>
        <Navigation></Navigation>
      { isLogin && <main className='app'>
        <Balance/>
        <Movements/>
        <Summary/>
        <Transfer/>
        <Loan/>
        <Close/>
        </main>
}
        </div>
  );
}

export default App;
