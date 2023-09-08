import { useState } from "react";
import "../styles/auth.css"
import axios from "axios";
import { getToken } from "../db/LocalStorageService";  
export default function EditProfile(props){
    const [userinfo, setUserInfo] = useState({
        image : null,
        bio : props.bio
    })
    const {access_token} = getToken()

    const handleChange=(e)=>{
        var name = e.target.name;
        var value = e.target.value;
        setUserInfo({
            ...userinfo,
            [name]:value,
        })
    };

    const handleImageChange=(e)=>{
        setUserInfo({
            ...userinfo,
            image : e.target.files[0],
        })
    };

    const handleSubmit= async (e)=>{
        e.preventDefault()
        let data = new FormData()
        if(userinfo.image){
            data.append("image", userinfo.image, userinfo.image.name)
        };
        data.append("bio", userinfo.bio)
        await axios.patch('http://127.0.0.1:8000/api/user/userinfo/', data, {
            headers: {
                'content-Type': "multipart/form-data",
                'authorization' : `Bearer ${access_token}`,
            },
        }).then(res=>{
            props.visible()
        }).catch(err=>{
            console.log(err)
        })
    }
    return(
        <form className="flex flex-col mx-auto" onSubmit={handleSubmit}>
            <label for="picture">Picture</label>
            <input className="file" type="file" name="image"
            accept="image/png, image/jpg, image/jpeg"
            onChange={handleImageChange}
            />

            <label for="title">Bio:</label>
            <input type="text" className="title" placeholder="bio" name="bio"
            onChange={handleChange}
            value={userinfo.bio}
            />
            <button type="submit" className="btn bg-blue-500">Submit</button>
        </form>
    )
}