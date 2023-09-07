import "../styles/auth.css"
export default function Signup(){
    return(
        <div className="form-block">
            <form className="flex flex-col">
                <label for="username">Username:</label>
                <input type="text" placeholder="username" name="username"/>
                <label for="email">Email:</label>
                <input type="email" placeholder="email" name="email"/>
                <label for="password">Password:</label>
                <input type="password" placeholder="password" name="password"/>
                <label for="password2">Conform Password:</label>
                <input type="password" placeholder="conform password" name="password2"/>
                <button type="submit" className="btn bg-blue-500">Signup</button>
                <p className="mx-auto text-sm">Already have an account? <a href="/login/" className="text-red-900 font-bold">login</a></p>
            </form>
        </div>
    )
}