
import './App.css';
import CourseGoalList from './componetns/CousreGoalList';
import CourseInput from './componetns/CousreInput';
import { useState } from 'react';

function App() {

  const [courseGoals,setCourseGoals] = useState ([
     {text:"Do Exercise!", id:"g1"},
  ]);

  const addGoalHandler = (enteredText) => {
      setCourseGoals ((preveState) => {
        return [...preveState,{id:Math.random().toString(), text: enteredText},];
      });
  };
  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter ((goal) => goal.id !== goalId);
      return updatedGoals;
    }) 
  };


  let content = ( 
  <p style={{ textAlign:"centre"}} >No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0 ) {
    content = (
    <CourseGoalList item = {courseGoals}  onDeleteItem={deleteItemHandler} />
    );
  }
  return (
    <div>
      <section id="goal-form">
      <CourseInput  onAddGoal={addGoalHandler}/>
     
      </section>
      <section id="goals"> {content}</section>
      
    </div>
  );
}

export default App;
