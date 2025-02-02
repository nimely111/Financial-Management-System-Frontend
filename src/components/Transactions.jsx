import { useState, useEffect } from "react";
import { BACKEND_URL } from "../api";
import { toast } from "react-toastify";

const Transactions = ({ transactions }) => {
  return (
    <>
      <div>
        {transactions.length > 0 ? (
          transactions.map((transaction, index) => (
            <p key={index}>{transaction.savings_type}</p>
          ))
        ) : (
          <p>N/A</p>
        )}
      </div>
    </>
  );
};

export default Transactions;
