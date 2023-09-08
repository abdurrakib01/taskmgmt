import "../styles/auth.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { storeToken } from "../db/LocalStorageService";
import axios from "axios";
export default function Signup(){
    const [user, setUser] = useState({
        username : "",
        email : "",
        password : "",
        password2 : "",
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
        e.preventDefault()
        const user_data = {
            username : user.username,
            email : user.email,
            password : user.password,
            password2 : user.password2,
            tc : user.tc,
        }
        await axios.post('https://taskapi-8fhe.onrender.com/api/user/register/', user_data)
        .then(res=>{
            storeToken(res.data.token)
            navigate('/login/');
        }).catch(err=>{
           setServerError(err.response.data)
        });
    }
    return(
        <div className="form-block">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label for="username">Username:</label>
                <input type="text" placeholder="username" name="username"
                onChange={handleOnchange}
                value={user.username}/>
                <label for="email">Email:</label>
                <input type="email" placeholder="email" name="email"
                onChange={handleOnchange}
                value={user.email}/>
                <label for="password">Password:</label>
                <input type="password" placeholder="password" name="password"
                onChange={handleOnchange}
                value={user.password}/>
                <label for="password2">Conform Password:</label>
                <input type="password" placeholder="conform password" name="password2"
                onChange={handleOnchange}
                value={user.password2}/>
                {server_error.non_field_errors ? <p style={{
                fontSize:12,
                backgroundColor: 'rgb(255, 190, 190)',
                padding : 5,
                borderRadius:5,
                marginBottom:0,
            }}>{server_error.non_field_errors[0]}</p>:""}
                <button type="submit" className="btn bg-blue-500">Signup</button>
                <p className="mx-auto text-sm">Already have an account? <a href="/login/" className="text-red-900 font-bold">login</a></p>
            </form>
        </div>
    )
}