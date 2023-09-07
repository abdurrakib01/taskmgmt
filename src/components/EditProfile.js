import "../styles/auth.css"
export default function EditProfile(){
    return(
        <form className="flex flex-col mx-auto">
            <label for="picture">Picture</label>
            <input className="file" type="file" name="picture"/>
            <label for="title">Bio:</label>
            <input type="text" className="title" placeholder="bio" name="bio"/>
            <button type="submit" className="btn bg-blue-500">Submit</button>
        </form>
    )
}