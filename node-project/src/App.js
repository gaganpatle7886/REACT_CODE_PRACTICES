import React from 'react';
import {useState} from 'react';
import Todo from "./components/Todo";

function App () {
 const [todos ,setTodos] = useState( [
    {title:"Buy Soap",description: "Buy 2 lifeboy",price :200},
    {title:"Buy Coconut Oli",description: "Buy 2 litr oil",price : 200},
    {title:"Buy Movie Ticket",description: "Buy 2 Movie Ticket",price : 200},
    ]
);

  const [title, setTitle] = useState("");

  const updateTitle = (event) => {
    console.log(event.target.value);
    
    setTitle (event.target.value);
  }

  const updateTodoList = () => {
    setTodos( (prevState) => {
      return [
        ...prevState,
        {title: title, description:"Hello",price:"500"},
      ];
    });
  }

  return( 
  <div>
  <input type="text" name="item" onChange={updateTitle} />
  <button onClick={updateTodoList}>Add me</button>
  <button >Read me</button>
  { todos.map((item,index) => {
    return (
    <Todo
    key={index}
    title = {item.title}
    description = {item.description}
    price = {item.price}
    />
    );
   })
   }
  </div>
  )
}

export default App;
