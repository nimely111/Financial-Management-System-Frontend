import { useState, useEffect } from "react";
import { BACKEND_URL } from "../api";
import { toast } from "react-toastify";

const Transactions = ({ transactions }) => {
  return (
    <>
      {transactions.length > 0 ? (
        transactions.map((transaction, index) => (
          <p key={index}>{transaction.savings_amount}</p>
        ))
      ) : (
        <p>N/A</p>
      )}
    </>
  );
};

export default Transactions;
