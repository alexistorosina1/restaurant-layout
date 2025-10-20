import  { Link }  from "react-router-dom"

export default function Navbar(){
    return(
        <header>
            <nav className="navbar">
                {/* <img /> */}
                <h1>Sabores De Mi Tierra</h1>
                <ul>
                    <li><Link href="/Menu">Menu</Link></li>   
                    <li><Link href="/About">About</Link></li>
                    <li><Link href="/Contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    )
}