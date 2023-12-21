import logo from './logo.svg';
import './App.css';

function App() {

  const todos =[
    "React is a JavaScript library for building user interfaces.",
   "React is used to build single-page applications.", 
   "React allows us to create reusable UI components."
  ]
  return (
    <div>
      <header>
      <img src={logo} className="App-logo" alt="logo" /> 
      <h1>React Improtant</h1>
      </header>
      <p><li><b>{todos[0]}</b></li></p>
      <p><li><b>{todos[1]}</b></li></p>
      <p><li><b>{todos[2]}</b></li></p>
    </div>
  )
}

export default App;
