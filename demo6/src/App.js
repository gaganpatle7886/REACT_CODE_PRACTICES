import { useEffect, useState } from "react";
import ExpenseFrom from "./components/ExpenseFrom";
import ExpenseItem from "./components/ExpenseItem";

function App() {
   
  const  [expenses, setExpenses] = useState ([
  {
    title: "Soap",
    date: new Date(2026, 22, 26),
    amount:200,
  },
  {
    title: "Milk",
    date: new Date(2026, 22, 26),
    amount:30,
  },
  {
    title: "Bread",
    date: new Date(2026, 22, 26),
    amount:20,
  },
  {
    title: "Maggie",
    date: new Date(2026, 22, 26),
    amount:20,
  },
]);

useEffect(() => {

  console.log(JSON.stringify(expenses));
}, [expenses]);

const handleAddExpense = (expenses) =>{
  console.log(handleAddExpense,JSON.stringify(expenses));

  setExpenses((prevState) => {
    return [...prevState,expenses];
  });
};
  return (
    <>
    <div>I am App</div>
    <ExpenseFrom addExpense={handleAddExpense}/>
    {expenses.map((expenses) =>{
      return <ExpenseItem expenses={expenses}></ExpenseItem>
    }
   )}
   {/* <ExpenseItem expenses={expenses[0]}></ExpenseItem>
    <ExpenseItem expenses={expenses[1]}></ExpenseItem>
    <ExpenseItem expenses={expenses[2]}></ExpenseItem>
  <ExpenseItem expenses={expenses[3]}></ExpenseItem> */}
   </>
  );
}

export default App;
