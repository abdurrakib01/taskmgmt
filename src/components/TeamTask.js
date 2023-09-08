import TaskNav from "./TaskNav";
import Task from "./Task";
import axios from "axios";
import { useState, useEffect } from "react";
import { getToken } from "../db/LocalStorageService";
export default function TeamTask(props){
    const {access_token} = getToken()
    const [teamTask, setTeamTask] = useState({})
    var fetching=async ()=>{
        console.log(props.id)
        await axios.get(`https://taskapi-8fhe.onrender.com/teams/${props.team.id}/`,{
            headers: {
                'Content-Type': "application/json",
                'authorization' : `Bearer ${access_token}`,
            },
        }).then(res=>{
            setTeamTask(res.data)
        }).catch(err=>{
            console.log(err.response.data)
        });
    }

    useEffect (()=>{
        fetching();
    },[props.team.id]);

    return(
        <div className="task-content">
            <TaskNav team={props.team} fetch={fetching}/>
            <div className="task-list">
                {Object.values(teamTask).map((value, index)=>(
                    <Task task={value} key={index}/>
                ))}
            </div>
        </div>
    )
}