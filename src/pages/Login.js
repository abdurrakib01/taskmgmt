import "../styles/auth.css"
export default function Signup(){
    return(
        <div className="form-block log">
            <form className="flex flex-col">
                <label for="email">Email:</label>
                <input type="email" placeholder="email" name="email"/>
                <label for="password">Password:</label>
                <input type="password" placeholder="password" name="password"/>
                <button type="submit" className="btn bg-blue-500">Login</button>
                <p className="mx-auto text-sm">Don't have an account? <a href="/signup/" className="text-red-900 font-bold">Signup</a></p>
            </form>
        </div>
    )
}