import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


function ExpenseItem(props) {
    const { title, date, amount} = props.expense;
    return (
      <div className="expense-item">
        <ExpenseDate date={date}/>
        <div className="expense-item__description">
        <h2>{title}</h2> 
        <div className="expense-item__price">{"Rs." + amount}</div>
        </div>
      </div>
    );
  }
  
  export default ExpenseItem;