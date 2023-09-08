import Profile from "../components/Profile";
import Teams from "../components/Teams";
import "../styles/home.css";
import { useState } from "react";
import TeamTask from "../components/TeamTask";

export default function Home(){
    const [listView, setListView] = useState(false)
    const handleTeamClick=()=>{
        console.log("hii");
        setListView(true);
    }
    return(
        <div className="flex justify-center items-center">
            <div className="team-section">
                <Profile/>
                <div className="team-list">
                    <Teams onClickHandler={handleTeamClick}/>
                </div>
            </div>
            {listView?
                <TeamTask/>
            :<div className="w-full flex justify-center"><p className="team-msg">Select a Team to Collaborate</p></div>}
        </div>
    )
}