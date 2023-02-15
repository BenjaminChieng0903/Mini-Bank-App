import './App.css';
import Navigation from './components/Navigation/navigation';
import Balance from './components/Balance/balance';
import Summary from './components/Summary/summary';
import Transfer from './components/Operation/transfer';
import Loan from './components/Operation/loan';
import Close from './components/Operation/close';
import Movements from './components/Movements/Movements';
function App() {
  return (
        <div>
        <Navigation></Navigation>
        <main className='app'>
        <Balance/>
        <Movements/>
        <Summary/>
        <Transfer/>
        <Loan/>
        <Close/>
        </main>
        </div>
  );
}

export default App;
