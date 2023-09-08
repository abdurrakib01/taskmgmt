import { useState, useEffect } from "react";
import "../styles/profileDetails.css";
import { Modal } from "antd";
import EditProfile from "./EditProfile";
import CreateTeam from "./CreateTeam";
import { getToken } from "../db/LocalStorageService";
import axios from "axios";
import { removeToken } from "../db/LocalStorageService";
import { useNavigate } from "react-router-dom";

export default function ProfileDetails(props){ 
    const [evisible, setEvisible] = useState(false)
    const [tvisible, setTvisible] = useState(false)
    const [userData, setUserData] = useState([]);
    const{access_token} = getToken()
    const handleEdit=()=>{
        setEvisible(false)
        fetching();
    }
    var fetching=()=>{
        axios.get('http://127.0.0.1:8000/api/user/userinfo/',{
            headers: {
                'Content-Type': "application/json",
                'authorization' : `Bearer ${access_token}`,
            },
        }).then(res=>{
            setUserData(res.data)
        }).catch(err=>{
            console.log(err.response.data)
        });
    }
    const navigate = useNavigate()
    useEffect (()=>{
        fetching();
    },[]);

    const handleLogout=()=>{
        removeToken();
        navigate("/login/")
    }
    return(
        <div>
            <div className="user-pro flex justify-center flex-col items-center">
                <img className="img" src={userData.image} alt=""/>
                <p className="mt-2 font-bold text-lg">{userData.username}</p>
                <p className="text-xs">{userData.bio}</p>
                <div className="mt-2 w-full flex justify-between">
                    <button onClick={()=>{setEvisible(true)}} className="btn">Edit Profile</button>
                    <Modal
                        open={evisible}
                        onCancel={()=>{setEvisible(false)}}
                        footer={null}
                    >
                        <EditProfile visible={handleEdit} bio={userData.bio}/>
                    </Modal>
                    <button onClick={()=>{setTvisible(true)}} className="btn ml-5">Create Team</button>
                    <Modal
                        open={tvisible}
                        onCancel={()=>{setTvisible(false)}}
                        footer={null}
                    >
                        <CreateTeam/>
                    </Modal>
                    <button onClick={handleLogout} className="btn ml-5">Logout</button>
                </div>
            </div> 
        </div>
    )
}