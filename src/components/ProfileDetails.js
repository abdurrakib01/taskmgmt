import { useState } from "react";
import profile_img from "../assets/images/pro.jpg";
import "../styles/profileDetails.css";
import { Modal } from "antd";
import EditProfile from "./EditProfile";
import CreateTeam from "./CreateTeam";

export default function ProfileDetails(){
    const [evisible, setEvisible] = useState(false)
    const [tvisible, setTvisible] = useState(false)
    return(
        <div>
            <div className="user-pro flex justify-center flex-col items-center">
                <img className="img" src={profile_img} alt=""/>
                <p className="mt-2 font-bold text-lg">AbdurRakib</p>
                <p className="text-xs">Software Engineer</p>
                <div className="mt-2 w-full flex justify-between">
                    <button onClick={()=>{setEvisible(true)}} className="btn">Edit Profile</button>
                    <Modal
                        open={evisible}
                        onCancel={()=>{setEvisible(false)}}
                        footer={null}
                    >
                        <EditProfile/>
                    </Modal>
                    <button onClick={()=>{setTvisible(true)}} className="btn ml-5">Create Team</button>
                    <Modal
                        open={tvisible}
                        onCancel={()=>{setTvisible(false)}}
                        footer={null}
                    >
                        <CreateTeam/>
                    </Modal>
                </div>
            </div>
        </div>
    )
}