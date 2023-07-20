import './ExpenseItem.css';
import Card from '../UI/Card';
import Expensedate from './Expensedate';
import { useState } from 'react';

function ExpenseItem(props) {
  // this state updates the title value
  const [title, setState] = useState(props.title);

  const changeHandler = () => {
    setState('updated!');
  };

  return (
    <>
      <Card className="expense-item">
        <Expensedate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={changeHandler}>click me</button>
      </Card>
    </>
  );
}

export default ExpenseItem;
