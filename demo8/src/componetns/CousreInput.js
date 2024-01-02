import './Button.module.css';
import './CourseInput.module.css';
import { useState } from "react";

function CourseInput (props) {
const [enteredValue, setEnteredValue] = useState ("");

const [isValid, setValid] = useState(true);

const goalInputChangeHandler = (event) =>{
    setEnteredValue(event.target.value);

 if (event.target.value.length > 0){
    setValid(true);
 }
};

const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.length === 0) {
        setValid(false);
        return;
    }
    props.onAddGoal(enteredValue);
}
return (
 <form onSubmit={ formSubmitHandler}>
    <div className="form-control">
    <label  style={{
        color: !isValid ? "red" : "black",
    }}>Course Goal</label>
    <input style={{
        borderColor: !isValid ? "red" : "black",
        backgroundColor: !isValid ? "salmon" : "transparent"
    }}
    
    type= "text"  onChange={goalInputChangeHandler} />
    </div>
    <button type='submit'>Add Goal</button>
</form>
)
}

export default CourseInput;