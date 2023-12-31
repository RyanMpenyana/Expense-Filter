import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
  //adding a conditional return statement

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found!</h2>;
  }
  return (
    <>
      <ul className="expenses-list">
        {props.items.map(expense => (
          <ExpenseItem
            date={expense.date}
            amount={expense.amount}
            title={expense.title}
            key={expense.id}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpensesList;
