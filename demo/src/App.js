import logo from './logo.svg';
import './App.css';

function App() {
  const displayAlert = (message) =>{
    window.alert(message);
  }
  return (
        <div>
          <h1>Hello World</h1>
        <h2>Alert Button</h2>

        <button
          onClick={() =>{
            displayAlert("I am Good Boy");
          }}
        >
          I am button
        </button>
        </div>
  );
}

export default App;
