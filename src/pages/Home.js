import Profile from "../components/Profile";
import Teams from "../components/Teams";
import "../styles/home.css";
import { useState, useEffect } from "react";
import TeamTask from "../components/TeamTask";
import axios from "axios";
import { getToken } from "../db/LocalStorageService";
export default function Home(){ 
    const [listView, setListView] = useState(false)
    const [teamList, setTeamList] = useState([])
    const[teamId, setTeamId] = useState({})
    const {access_token} = getToken()
    const handleTeamClick=(value)=>{
        setListView(true);
        setTeamId(value);
    }
    var fetching=async ()=>{
        await axios.get('https://taskapi-8fhe.onrender.com/teams/',{
            headers: {
                'Content-Type': "application/json",
                'authorization' : `Bearer ${access_token}`,
            },
        }).then(res=>{
            setTeamList(res.data)
        }).catch(err=>{
            console.log(err.response.data)
        });
    }
    useEffect (()=>{
        fetching();
    },[]);
    return(
        <div className="flex justify-center items-center">
            <div className="team-section">
                <Profile/>
                <div className="team-list">
                    {teamList.map((value, index)=>(
                        <Teams value={value} key={index} onClickHandler={handleTeamClick}/>
                    ))}
                </div>
            </div> 
            {listView?
                <TeamTask team={teamId}/>
            :<div className="w-full flex justify-center"><p className="team-msg">Select a Team to Collaborate</p></div>}
        </div>
    )
}