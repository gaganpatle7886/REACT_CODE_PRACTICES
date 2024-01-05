import { useEffect, useState } from "react";
import ExpenseFrom from "./components/ExpenseFrom";
import Expenses from "./components/Expenses";


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
    <Expenses expenses={expenses} />
   
   </>
  );
}

export default App;
