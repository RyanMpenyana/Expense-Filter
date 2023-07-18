import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
const Expenses = props => {
  return (
    <>
      <Card className="expenses">
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
