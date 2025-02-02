import { useState, useEffect } from "react";
import { BACKEND_URL } from "../api";
import { toast } from "react-toastify";

const Transactions = ({
  transactions,
  saving_type,
  saving_amount,
  saving_currency,
}) => {
  return (
    <>
      {transactions.length > 0 ? (
        type.map((transaction, index) => (
          <p key={index}>{transaction.savings_amount}</p>
        ))
      ) : (
        <p>N/A</p>
      )}
    </>
  );
};

export default Transactions;
