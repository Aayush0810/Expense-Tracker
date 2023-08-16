import React, {useContext} from "react";
import { GlobalContext } from "../Context/GlobalState";

const AllTransactions = ({ transaction }) => {
  const {deleteTransaction} = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
        <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>X</button>
      </span>
    </li>
  );
};

export default AllTransactions;
 