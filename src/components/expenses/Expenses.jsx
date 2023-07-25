import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  return (
    //expenseItem component is re-used
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map(expense => (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
            id={expense.id}
            key={expense.id}
          />
        ))}
      </Card>
    </>
  );
};

export default Expenses;
