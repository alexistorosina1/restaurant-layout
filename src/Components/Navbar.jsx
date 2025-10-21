import  { Link }  from "react-router-dom"

export default function Navbar(){
    return(
        <header>
            <nav className="navbar">
                {/* <img /> */}
                <h1>Sabores De Mi Tierra</h1>
                <ul>
                    <li><a href="#Menu">Menu</a></li>   
                    <li><a href="#About">About</a></li>
                    <li><a href="#Contact">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}