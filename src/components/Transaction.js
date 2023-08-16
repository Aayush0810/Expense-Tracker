import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import AllTransactions from './AllTransactions';

const Transaction = () => {
  const {transactions} = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
        <AllTransactions transaction={transaction} key={transaction.id}/>

        ))}
      </ul>
    </>
  )
}

export default Transaction
