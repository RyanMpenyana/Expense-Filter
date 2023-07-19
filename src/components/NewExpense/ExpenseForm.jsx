import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    console.log(expenseData);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="Amount">Amount</label>
            <input
              onChange={amountChangeHandler}
              type="number "
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="Date">Date</label>
            <input
              type="Date"
              min="2020-05-23"
              max="2050-01-01"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={submitHandler} type="submit">
            Add Expense
          </button>
        </div>
      </form>
    </>
  );
};
export default ExpenseForm;
