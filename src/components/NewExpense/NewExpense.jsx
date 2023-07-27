import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

import { useState } from 'react';

const NewExpense = props => {
  const [showBar, setBar] = useState(true);

  const setShowHandler = () => {
    setBar(true);
  };
  const setHideHandler = () => {
    setBar(false);
  };
  //Function expects the entered expense data
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 30).toString()
    };
    props.onAddExpense(expenseData);
  };

  return (
    <>
      <div className="new-expense">
        {showBar ? (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={setHideHandler}
          />
        ) : (
          <button onClick={setShowHandler} type="submit">
            Add Expense
          </button>
        )}
      </div>
    </>
  );
};
export default NewExpense;
