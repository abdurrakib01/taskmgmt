import "../styles/teams.css";
export default function Teams(props){
    return(
        <div onClick={props.onClickHandler} className="team ml-8">
            <p className="font-bold">Code Crusaders</p>
            <p className="text-sm">Total Members: 6</p>
        </div>
    )
}