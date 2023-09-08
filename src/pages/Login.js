import "../styles/auth.css";
import { storeToken } from "../db/LocalStorageService";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Signup(){
    const [user, setUser] = useState({
        username : "",
        password : "",
    })
    const [server_error, setServerError] = useState({})
    const handleOnchange=(e)=>{
        var value = e.target.value;
        var name = e.target.name;
        setUser({
            ...user,
            [name] : value
        })
    }
    const navigate = useNavigate();
    
    const handleSubmit=async(e)=>{
        console.log(user)
        e.preventDefault()
        const user_data = {
            username : user.username,
            password : user.password,
        }
        await axios.post('https://taskapi-8fhe.onrender.com/api/user/login/', user_data)
        .then(res=>{
            storeToken(res.data.token)
            navigate('/');
        }).catch(err=>{
           setServerError(err.response.data)
        });
    }

    return(
        <div className="form-block log">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label for="email">Username:</label>
                <input type="text" placeholder="username" name="username"
                onChange={handleOnchange}
                value={user.username}/>
                <label for="password">Password:</label>
                <input type="password" placeholder="password" name="password"
                onChange={handleOnchange}
                value={user.password}/>
                {server_error.non_field_errors ? <p style={{
                fontSize:12,
                backgroundColor: 'rgb(255, 190, 190)',
                padding : 5,
                borderRadius:5,
                marginBottom:0,
            }}>{server_error.non_field_errors[0]}</p>:""}
                <button type="submit" className="btn bg-blue-500">Login</button>
                <p className="mx-auto text-sm">Don't have an account? <a href="/signup/" className="text-red-900 font-bold">Signup</a></p>
            </form>
        </div>
    )
}