import { useState, useEffect } from "react";
import { BACKEND_URL } from "../api";
import { toast } from "react-toastify";

const Transactions = ({ transactions, field }) => {
  return (
    <td>
      {transactions.length > 0 ? (
        transactions.map((transaction, index) => (
          <p key={index}>{transaction[field]}</p>
        ))
      ) : (
        <p>N/A</p>
      )}
    </td>
  );
};

export default Transactions;
