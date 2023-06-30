import React, { useState } from 'react';

const FinanceTrackerWidget = () => {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const addTransaction = () => {
    if (!description || !amount || !type) {
      setError('Please fill the required fields');
      return;
    }

    const newTransaction = {
      description,
      amount: parseFloat(amount),
      type,
    };

    if (editIndex >= 0) {
      // Editing existing transaction
      const updatedTransactions = [...transactions];
      updatedTransactions[editIndex] = newTransaction;
      setTransactions(updatedTransactions);
      setEditIndex(-1);
    } else {
      // Adding new transaction
      setTransactions([...transactions, newTransaction]);
    }

    setDescription('');
    setAmount('');
    setType('');
    setError('');
  };

  const editTransaction = (index) => {
    const transactionToEdit = transactions[index];
    setDescription(transactionToEdit.description);
    setAmount(transactionToEdit.amount.toString());
    setType(transactionToEdit.type);
    setEditIndex(index);
  };

  const deleteTransaction = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };

  const calculateTotalIncome = () => {
    const incomeTransactions = transactions.filter((transaction) => transaction.type === 'income');
    return incomeTransactions.reduce((total, transaction) => total + transaction.amount, 0);
  };

  const calculateTotalExpense = () => {
    const expenseTransactions = transactions.filter((transaction) => transaction.type === 'expense');
    return expenseTransactions.reduce((total, transaction) => total + transaction.amount, 0);
  };

  const calculateBalance = () => {
    const totalIncome = calculateTotalIncome();
    const totalExpense = calculateTotalExpense();
    return totalIncome - totalExpense;
  };

  const clearHistory = () => {
    setTransactions([]);
  };

  return (
    <div className="finance-tracker-widget">
      <h3>Finance Tracker</h3>
      <br />
      <div className="add-transaction">
        <div className="input-container">
          <div className="tooltip">
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {(!description && error) && (
              <span className="tooltiptext">{error}</span>
            )}
          </div>
          <div className="tooltip">
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            {(!amount && error) && (
              <span className="tooltiptext">{error}</span>
            )}
          </div>
        </div>

        <div className="input-container">
          <div className="tooltip">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              style={{ color: type === 'expense' ? 'red' : type === 'income' ? 'green' : 'black' }}
            >
              <option value="">Select Type</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            {(!type && error) && (
              <span className="tooltiptext">{error}</span>
            )}
          </div>
          <button onClick={addTransaction}>
            {editIndex >= 0 ? 'Update Transaction' : 'Add Transaction'}
          </button>
        </div>
      </div>

      <br />
      <div className="summary">
        <div className="summary-item">
          <p>Total Income:</p>
          <p className="income">${calculateTotalIncome()}</p>
        </div>
        <div className="summary-item">
          <p>Total Expense:</p>
          <p className="expense">${calculateTotalExpense()}</p>
        </div>
        <div className="summary-item">
          <p>Balance:</p>
          <p>${calculateBalance()}</p>
        </div>
      </div>
      <div className="transaction-history">
        <h4>Transaction History</h4>
        <div className="transaction-list">
          {transactions.length > 0 ? (
            transactions.map((transaction, index) => (
              <div key={index} className="transaction-item">
                <div>
                  <p>{transaction.description}</p>
                  <p className={transaction.type}>
                    {transaction.type === 'income' ? '+' : '-'}${transaction.amount}
                  </p>
                </div>
                <div>
    <button className="edit-button" onClick={() => editTransaction(index)}>Edit</button>
    <button className="delete-button" onClick={() => deleteTransaction(index)}>Delete</button>
  </div>
              </div>
            ))
          ) : (
            <p>No transactions recorded.</p>
          )}
          < br></br>
          {transactions.length > 0 && (
          <button onClick={clearHistory}>Clear History</button>
        )}
        </div>
        
      </div>
    </div>
  );
};

export default FinanceTrackerWidget;
