import { useState } from "react";
import Todo from "./components/Todo";
import './App.css';

function App() {
   const todos = [
    {title:"Buy Soap", description: "Buy 2 lifeboy soap", price: 300},
    {title: "Buy Coconut Oil", description:"Buy 2 ltrs of coconut oil", price:400},
    {title: "Buy Movie Ticket", description:"Buy Movie Ticket", price:300},
   ];

  return (
     <div>
      <h1>Hello World</h1>
      <h3>1 method</h3>
      <p><b>{todos[0].title}</b> - <span>{todos[0].description}</span> - <span>{todos[0].price}</span></p>
      <p><b>{todos[1].title}</b> - <span>{todos[1].description}</span> - <span>{todos[1].price}</span></p>
      <p><b>{todos[2].title}</b> - <span>{todos[2].description}</span> - <span>{todos[2].price}</span></p>
      <h3>2 method</h3>
      <Todo title={todos[0].title} description={todos[0].description} price={todos[0].price} />
      <Todo title={todos[1].title} description={todos[1].description} price={todos[1].price} />
      <Todo title={todos[2].title} description={todos[2].description} price={todos[2].price} />
      <h3>3 Map method</h3>
      {
        todos.map ((item) =>{
          return(
            <Todo
            title={item.title}
            description={item.description}
            price={item.price}
            />
          );
        }

        )
      }  
     </div>
  );
}

export default App;
