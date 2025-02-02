import { useState, useEffect } from "react";
import { BACKEND_URL } from "../api";
import { toast } from "react-toastify";

const Transactions = ({ type }) => {
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
