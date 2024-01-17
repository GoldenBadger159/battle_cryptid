import React from "react"
import Logo from "../assets/Battle_Cryptid.png"
import Facebook from "../assets/facebook_logo.png"
import Instagram from "../assets/instagram_logo.png"
import Discord from "../assets/discord_logo.png"
import Patreon from "../assets/patreon_logo.png"
import "./Header.css"
import { useAuth } from '../contexts/AuthContext';
import { Link } from "react-router-dom";



export default function Header() {
    const { currentUser } = useAuth()

    return (
        <header>
            <div className="top">
                <Link to="/"><img className="logo" src={Logo} alt="Logo" /></Link>
                <h1 className="bctitle">Battle Cryptid</h1>
                <div>
                    {/* TODO: Implement the authorize links as a seperate
                    component and make it so that when the user is logged in
                    it displays a logout option instead. */}
                    <Link className="authorize" to="/login">Login</Link>
                    <Link className="authorize" to="/signup">Sign Up</Link>
                    <img className="social" src={Facebook} alt="facebook" />
                    <img className="social" src={Instagram} alt="instagram" />
                    <img className="social" src={Discord} alt="discord" />
                    <img className="social" src={Patreon} alt="patreon" />
                </div>
            </div>
            <ul className="nav">
                <li className="nav-item"><Link className="link" to="/home">Home</Link></li>
                <li className="nav-item"><Link className="link" to="">Characters</Link></li>
                <li className="nav-item"><Link className="link" to="">The Arcanum</Link></li>
                <li className="nav-item"><Link className="link" to="">Feedback</Link></li>
                <li className="nav-item"><Link className="link" to="">Community</Link></li>
            </ul>
        </header>
    )
}