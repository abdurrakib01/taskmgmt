import "../styles/teams.css";
export default function Teams(props){
    const handleClick=()=>{
        props.onClickHandler(props.value);
    }
    return(
        <div onClick={handleClick} className="team ml-8">
            <p className="font-bold">{props.value.name}</p>
            <p className="text-sm">Total Members: {props.value.teams.length}</p>
        </div>
    )
}