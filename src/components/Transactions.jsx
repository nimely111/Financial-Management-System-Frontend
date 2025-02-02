import { BACKEND_URL } from "../api";
import { useState, useEffect } from "react";
const Transactions = () => {
  const user = `${BACKEND_URL}/users`;

  const fetchUsers = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.statusText}`);
      }

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to load users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();

  return (
    <>
      {user.transactions.length > 0 ? (
        user.transactions.map((transaction, index) => (
          <p key={index}>{transaction.savings_amount}</p>
        ))
      ) : (
        <p>N/A</p>
      )}
    </>
  );
};

export default Transactions;
