import { useState } from "react";
import profile_img from "../assets/images/pro.jpg";
import "../styles/profile.css";
import { Drawer } from "antd";
import ProfileDetails from "./ProfileDetails";


export default function Profile(){
    const [visible, setVisible] = useState(false)
    return(
        <div className="pro-section">
            <div className="user ml-8 flex items-center">
                <img onClick={()=>{setVisible(true)}} src={profile_img} alt=""/>

                <Drawer
                    title="AbdurRakib"
                    open={visible}
                    onClose={()=>{setVisible(false)}}
                    placement="left"
                >
                    <ProfileDetails/>
                </Drawer>

                <div className="info flex">
                    <span class="material-symbols-outlined src-icon">search</span>
                    <input className="src-team" type="text" placeholder="search team"/>
                </div>
            </div>
        </div>
    )
}