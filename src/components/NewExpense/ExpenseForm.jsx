import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = event => {
    setUserInput(() => {
      return {
        ...userInput,
        enteredTitle: console.log(event.target.value)
      };
    });
  };
  const amountChangeHandler = event => {
    setUserInput(() => {
      return {
        ...userInput,
        enteredAmount: console.log(event.target.value)
      };
    });
  };
  const dateChangeHandler = event => {
    setUserInput(() => {
      return {
        ...userInput,
        enteredDate: console.log(event.target.value)
      };
    });
  };
  return (
    <>
      <form>
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
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
  );
};
export default ExpenseForm;
