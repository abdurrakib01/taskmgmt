import { useEffect, useState } from "react";
import "../styles/profile.css";
import { Drawer } from "antd";
import ProfileDetails from "./ProfileDetails";
import axios from "axios";
import { getToken } from "../db/LocalStorageService";

export default function Profile(){
    const [visible, setVisible] = useState(false)
    const [contents, setContents] = useState([]);
    const {access_token} = getToken()
    var fetching=()=>{
        axios.get('http://127.0.0.1:8000/api/user/userinfo/',{
            headers: {
                'Content-Type': "application/json",
                'authorization' : `Bearer ${access_token}`,
            },
        }).then(res=>{
            setContents(res.data)
        }).catch(err=>{
            console.log(err.response.data)
        });
    }
    useEffect (()=>{
        fetching();
    },[]);

    return(
        <div className="pro-section">
            <div className="user ml-8 flex items-center">
                <img onClick={()=>{setVisible(true)}} src={contents.image} alt=""/>

                <Drawer
                    title={contents.username}
                    open={visible}
                    onClose={()=>{setVisible(false)}}
                    placement="left"
                >
                    <ProfileDetails/>
                </Drawer>

                <div className="info flex">
                    <span className="material-symbols-outlined src-icon">search</span>
                    <input className="src-team" type="text" placeholder="search team"/>
                </div>
            </div>
        </div>
    )
}