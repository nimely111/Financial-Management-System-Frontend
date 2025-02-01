const Transactions = () => {
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
