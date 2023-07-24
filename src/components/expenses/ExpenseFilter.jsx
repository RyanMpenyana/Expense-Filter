import classes from './ExpenseFilter.module.css';
const ExpenseFilter = () => {
  return (
    <>
      <div className={classes.filter}>
        <h3>Filter Expense</h3>
        <select name="" id="">
          <option value="">2020</option>
          <option value="">2021</option>
          <option value="">2022</option>
          <option value="">2023</option>
          <option value="">2024</option>
        </select>
      </div>
    </>
  );
};
export default ExpenseFilter;
