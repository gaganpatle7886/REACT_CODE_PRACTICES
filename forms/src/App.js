
import { useState } from "react";

function App() {
  const [inputs,setInputs] = useState({});
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const [myGender, setMyGender] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
    const handleSubmit = (event) =>{
      event.preventDefault();
      console.log(inputs);
    }

    const handleText = (event) => {
      setTextarea(event.target.value)
      event.preventDefault();
      console.log(textarea);
    }
  

    const handlSelect = (event) => {
     setMyGender(event.target.value)
      event.preventDefault();
      console.log(myGender);
    }
    
  
  return (
    <>
    <h2>Submitting Forms</h2>
     <form onSubmit={handleSubmit}>
      <label>Enter Your name:
        <input
        type="text"
        name="username"
        value={inputs.username || ""}
        onChange={handleChange}
        />
      </label>
      <br></br>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
      <br></br>
      <input type="submit"/>
       <br></br>
       <h2>Teatarea</h2>
      <textarea value={textarea} onChange={handleText} />
      <br>
      </br>
      <h2>Select Gender</h2>
      <select value={myGender} onChange={handlSelect}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
     </form>
     </>
  );
}

export default App;
