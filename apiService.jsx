// apiService.js
import { BACKEND_URL } from "./api";

// User API Services
export const userService = {
  // Get all users
  getAllUsers: async () => {
    const response = await fetch(`${BACKEND_URL}/users`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },

  // Get single user
  getUser: async (id) => {
    const response = await fetch(`${BACKEND_URL}/users/${id}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },

  // Create user
  createUser: async (userData) => {
    const response = await fetch(`${BACKEND_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },

  // Update user
  updateUser: async (id, userData) => {
    const response = await fetch(`${BACKEND_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },

  // Delete user
  deleteUser: async (id) => {
    const response = await fetch(`${BACKEND_URL}/users/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },
};

// Transaction API Services
export const transactionService = {
  // Get all transactions
  getAllTransactions: async () => {
    const response = await fetch(`${BACKEND_URL}/transactions`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },

  // Get single transaction
  getTransaction: async (id) => {
    const response = await fetch(`${BACKEND_URL}/transactions/${id}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },

  // Create transaction
  createTransaction: async (transactionData) => {
    // Ensure savings_amount is a float
    const data = {
      ...transactionData,
      savings_amount: parseFloat(transactionData.savings_amount),
    };

    const response = await fetch(`${BACKEND_URL}/transactions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },

  // Update transaction
  updateTransaction: async (id, transactionData) => {
    // Ensure savings_amount is a float if it exists in the update data
    const data = transactionData.savings_amount
      ? {
          ...transactionData,
          savings_amount: parseFloat(transactionData.savings_amount),
        }
      : transactionData;

    const response = await fetch(`${BACKEND_URL}/transactions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },

  // Delete transaction
  deleteTransaction: async (id) => {
    const response = await fetch(`${BACKEND_URL}/transactions/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  },
};

// Error handling utility
export const handleApiError = (error) => {
  console.error("API Error:", error);
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return `Error: ${error.response.data.detail || "Something went wrong"}`;
  } else if (error.request) {
    // The request was made but no response was received
    return "Error: No response from server";
  } else {
    // Something happened in setting up the request that triggered an Error
    return `Error: ${error.message}`;
  }
};
