import Button from './Button';
import './Button.module.css';
import styles from  './CourseInput.module.css';
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
   {/* <div className={`form-control ${!isValid ? " invalid" : ""}`}>  */}

  {/* <div className={styles["from-control"]}>  */}
  <div className={`${styles["form-control"]} ${!isValid ? " " +[ "invalid" ] : ""}`}> 
    <label>Course Goal</label>
    <input type= "text"  onChange={goalInputChangeHandler} />
    </div>
    <Button>Add Goal</Button>
</form>
)
}

export default CourseInput;