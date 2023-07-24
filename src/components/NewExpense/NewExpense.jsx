import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
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
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    </>
  );
};
export default NewExpense;
