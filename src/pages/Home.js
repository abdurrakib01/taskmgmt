import Profile from "../components/Profile";
import Teams from "../components/Teams";
import "../styles/home.css";
import TaskNav from "../components/TaskNav";
import Task from "../components/Task";


export default function Home(){
    return(
        <div className="flex">
            <div className="team-section">
                <Profile/>
                <div className="team-list">
                    <Teams/>
                    <Teams/>
                    <Teams/>
                    <Teams/>
                    <Teams/>
                    <Teams/>
                    <Teams/>
                    <Teams/>
                    <Teams/>
                    <Teams/>
                </div>
            </div>
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
        </div>
    )
}