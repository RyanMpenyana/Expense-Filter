import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
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

        {/* dynamic rendering of list items conditionally*/}

        {/* if filteredExpenses.lenght is equal to 0 return the p tag */}
        {filteredExpenses.length === 0 && <p>No Expenses Found</p>}

        {/* else if filteredExpense is greater than 0 return the filtered expenses */}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map(expense => (
            <ExpenseItem
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
              key={expense.id}
            />
          ))}
      </Card>
    </>
  );
};

export default Expenses;
