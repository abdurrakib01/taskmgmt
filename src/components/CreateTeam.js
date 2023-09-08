import { useState, useEffect } from "react";
import "../styles/auth.css";
import { Select } from "antd";
import axios from "axios";
import { getToken } from "../db/LocalStorageService";

export default function EditProfile(){
    const [userList, setUserList] = useState([])
    const [team, setTeam] = useState({
        name : "",
        teams : null,
    })
    const {access_token} = getToken()
    var fetching=()=>{
        axios.get('https://taskapi-8fhe.onrender.com/api/user/userlist/',{
            headers: {
                'Content-Type': "application/json",
                'authorization' : `Bearer ${access_token}`,
            },
        }).then(res=>{
            setUserList(res.data)
        }).catch(err=>{
            console.log(err.response.data)
        });
    }
    useEffect (()=>{
        fetching();
    },[]);
    const { Option } = Select;
    const handleChange = (values) => {
        setTeam({
            ...team,
            teams:values
        })
    };
    const handleNameChange = (e) => {
        setTeam({
            ...team,
            name : e.target.value
        })
    };

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const data = {
            name : team.name,
            teams : team.teams,
        }
        await axios.post('https://taskapi-8fhe.onrender.com/teams/', data, {
            headers: {
                'content-Type': "application/json",
                'authorization' : `Bearer ${access_token}`,
            },
        }).then(res=>{
            window.location.reload();
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <form className="flex flex-col mx-auto" onSubmit={handleSubmit}>
            <label for="name">Team Name:</label>
            <input type="text" className="title" placeholder="team name" name="name"
            onChange={handleNameChange}
            value={team.name}/>
            <label for="member">Team Members</label>
            <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Select items"
                onChange={handleChange}
            >   
                {userList.map((value, index)=>(
                    <Option key={index} value={value.id}>{value.username}</Option>
                ))}
            </Select>
            <button type="submit" className="btn bg-blue-500">Submit</button>
        </form>
    )
}