export const Task = (props) => {
    return (
       
        <div className = "task" style={{backgroundColor: props.completed ? "#0cab3e" : "#5190f5"}}>
            {props.taskName}
            <button className="del" onClick={() => props.deleteTask(props.id)}> X </button>
            <button className="complete" onClick={() => props.completeTask(props.id)}>&#x2713;</button>
        </div>

    );

}; // task