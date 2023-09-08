import TaskNav from "./TaskNav";
import Task from "./Task";
export default function TeamTask(){
    return(
        <div className="task-content">
            <TaskNav/>
            <div className="task-list">
                <Task/>
                <Task/>
                <Task/>
                <Task/>
                <Task/>
            </div>
        </div>
    )
}