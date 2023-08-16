import './App.css';
import Transaction from './components/Transaction';
import Balance from './components/Balance';
import Header from './components/Header';
import Income from './components/Income';
import AddTransaction from './components/AddTransaction';
import { GlobalContext, GlobalProvider } from './Context/GlobalState';


function App() {
  return (
    <GlobalProvider>
    <Header/>
    <div className='container'>
      <Balance/>
      <Income/>
      <Transaction/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
