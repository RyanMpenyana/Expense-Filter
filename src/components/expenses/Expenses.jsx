import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
import ExpensesList from './ExpensesList';
const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  //this Function sets state to the selected year
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  //targets the entered date and therefore uses it to filter items
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    //expenseItem component is re-used
    <>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />

        {/* dynamic rendering of list items conditionally*/}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
