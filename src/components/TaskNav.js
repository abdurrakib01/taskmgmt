import { useState } from "react";
import "../styles/tasknav.css";
import { Modal } from "antd";
import AddTask from "./AddTask";


export default function TaskNav(props){
    const [visible, setVisible] = useState(false)
    const handleClick=()=>{
        setVisible(false);
        props.fetch();
    }
    return(
        <div className="task-section">
            <div className="ml-8">
                <p className="font-bold">{props.team.name}</p>
                <p className="text-sm">Total Members: {props.team.teams.length}</p>
            </div>
            <div>
                <button onClick={()=>{setVisible(true)}} className="btn">+ Add Task</button>
                <Modal
                    title="ADD TASK"
                    open={visible}
                    onCancel={()=>{setVisible(false)}}
                    footer={null}
                >
                <AddTask team={props.team} visible={handleClick}/>
                </Modal>
            </div>
            <div className="filter flex">
                <div className="text-sm">
                <input type="checkbox" id="com1" name="com" value="completed"/>
                <label for="com"> Completed</label><br/>
                <input type="checkbox" id="pro1" name="pro" value="progress"/>
                <label for="pro"> Progress</label><br/>
                <input type="checkbox" id="pen1" name="pen" value="pending"/>
                <label for="pen"> Pending</label><br/>
                </div>
                <div className="ml-5 text-sm">
                <input type="checkbox" id="pri" name="pri" value="priority"/>
                <label for="pri"> Priority</label><br/>
                <input type="checkbox" id="date" name="date" value="date"/>
                <label for="date"> Due Date</label><br/>
                </div>
            </div>
        </div>
    )
}