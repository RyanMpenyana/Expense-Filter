import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  //Function expects the entered expense data
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 30).toString()
    };
    console.log(expenseData);
  };
  const logArray = arrayValues => {
    let arr = [23, 34, 45, 56, 78];
    const numbers = [
      ...arrayValues,
      arr.map(number => {
        console.log(number);
      })
    ];
    console.log(numbers);
  };
  return (
    <>
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          logarithm={logArray}
        />
      </div>
    </>
  );
};
export default NewExpense;
