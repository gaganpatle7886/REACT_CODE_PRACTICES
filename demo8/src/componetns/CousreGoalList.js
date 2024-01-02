import CourseGoalItem from './CourseGoalItem';
import './CourseGoalItem.css';
function CourseGoalList(props) {
   return(
    <ul className= "goal-list">
    {props.item.map((goal, index) =>{
        return(
        <CourseGoalItem 
        className="goal-list" 
        text={goal.text} 
        id={goal.id}  
        onDelete= {props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>


        );
    })}
   </ul> 
   );
}

export default CourseGoalList;