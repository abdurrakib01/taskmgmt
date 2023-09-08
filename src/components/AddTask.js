import { useState} from "react";
import "../styles/auth.css"
import { Select } from "antd";
import axios from "axios";
import { getToken } from "../db/LocalStorageService";
export default function AddTask(props){
    const team = props.team
    const { Option } = Select;
    const {access_token} =getToken();
    const [taskData, setTaskData] = useState({
        title : "",
        des : "",
        status : "",
        due_date:"",
        assign : null,
        priority: 0,
    })
    const handleSelectChange = (values) => {
        setTaskData({
            ...taskData,
            assign:values
        })
      };

    const handleOnchange=(e)=>{
        var value = e.target.value;
        var name = e.target.name;
        setTaskData({
            ...taskData,
            [name] : value
        })
    }
    
    const handleSubmit=async(e)=>{
        console.log(taskData)
        let data = {
            title : taskData.title,
            des : taskData.des,
            priority : taskData.priority,
            status : taskData.status,
            due_date : taskData.due_date,
            assign : taskData.assign
        }
        e.preventDefault()
        await axios.post(`https://taskapi-8fhe.onrender.com/teams/${team.id}/`, data, {
            headers: {
                'content-Type': "application/json",
                'authorization' : `Bearer ${access_token}`,
            },
        }).then(res=>{
            props.visible()
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <form className="flex flex-col mx-auto" onSubmit={handleSubmit}>
            <label for="title">Title:</label>
            <input type="text" className="title" placeholder="title" name="title"
            onChange={handleOnchange}
            value={taskData.title}/>
            <label for="des">Description:</label>
            <textarea placeholder="Description" name="des"
            onChange={handleOnchange}
            value={taskData.des}/>
            <label for="pri">Priority:</label>
            <input type="number" className="title num" placeholder="from 1 to 10" name="priority"
            onChange={handleOnchange}
            value={taskData.priority}/>
            <label for="due">Due Date:</label>
            <input type="date" className="title" placeholder="mm/dd/yy" name="due_date"
            onChange={handleOnchange}
            value={taskData.due_date}/>
            <label for="assign-member">Assign Members</label>
            <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Select items"
                onChange={handleSelectChange}
            >   {team.teams.map((value, index)=>(
                <Option value={value}>{team.username[index]}</Option>
               ))}
            </Select>
            <label className="mt-3">Status:</label>
            <div className="filter radio flex">
                <input type="radio" name="status" value="completed"
                onChange={handleOnchange}/>
                <label for="status"> Completed</label>
                <input type="radio" name="status" value="progressing"
                onChange={handleOnchange}/>
                <label for="pro"> Progressing</label>
                <input type="radio" name="status" value="pending"
                onChange={handleOnchange}/>
                <label for="pen"> Pending</label>
            </div>
            <button type="submit" className="btn bg-blue-500">Add Task</button>
        </form>
    )
}