import "../styles/navbar.css"
export default function Navbar(){
    return(
        <nav>
            <div className="block p-3">
            <p className="logo">TaskMgmt</p>
            <div className="menu">
                {/* <a href="#">Add Team</a>
                <a href="#">Login</a>
                <a href="#">Signup</a> */}
            </div>
            </div>
        </nav>
    )
}