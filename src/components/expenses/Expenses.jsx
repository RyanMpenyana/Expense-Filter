import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const [filterTextInfo, setSelectedYear] = useState(
    '2020 , 2021 , 2022 , 2023 , 2024'
  );

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    if (selectedYear === '2021') {
      setSelectedYear('2020 , 2022 , 2023 , 2024');
    }
  };

  return (
    //expenseItem component is re-used
    <>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChange={filterChangeHandler} />
        <p>{filterTextInfo}</p>
        <ExpenseItem
          id={'e1'}
          date={props.items[0].date}
          title={props.items[0].title}
          amount={props.items[0].amount}
        />
        <ExpenseItem
          id={'e2'}
          date={props.items[1].date}
          title={props.items[1].title}
          amount={props.items[1].amount}
        />
        <ExpenseItem
          id={'e3'}
          date={props.items[2].date}
          title={props.items[2].title}
          amount={props.items[2].amount}
        />
        <ExpenseItem
          id={'e4'}
          date={props.items[3].date}
          title={props.items[3].title}
          amount={props.items[3].amount}
        />
      </Card>
    </>
  );
};

export default Expenses;
