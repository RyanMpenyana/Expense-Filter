import classes from './ExpenseFilter.module.css';
const ExpenseFilter = props => {
  // executed onChange and passes the change value
  const DropdownChangeHandler = event => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <>
      <div className={classes.filter}>
        <h3>Filter Expense</h3>
        <select value={props.selected} onChange={DropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </>
  );
};
export default ExpenseFilter;
