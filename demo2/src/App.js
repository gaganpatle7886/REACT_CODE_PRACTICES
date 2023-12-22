

function App() {
  const onfromSubmit = (Event) => {
    Event.preventDefault();
    window.alert ("Hello");
  };
  return (
    <div>
      <form onSubmit = {onfromSubmit}>
        <label>
          Enter Your Name
          <input type='text'></input>
        </label>
        <button type='submit'>Click Me</button>
      </form>
    </div>
    
  )
}

export default App;
