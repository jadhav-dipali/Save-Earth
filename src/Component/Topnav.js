import logo from "../Images/logo.png"
import "../Style/topnav.css"

export default function Topnav(){
    return<>
    <nav id="nav-bar-topnav">
       <div id="left-side-nav-bar">
        <img  src={logo} id="logo"/>
        <h1>Save Earth</h1>
       </div>
       <div id="right-side-nav-bar">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Survay</li>
            <li>Contact</li>
        </ul>
       </div>
    </nav>
    </>
}