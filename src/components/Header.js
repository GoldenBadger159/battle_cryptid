import React from "react"
import Logo from "../assets/Battle_Cryptid.png"
import Facebook from "../assets/facebook_logo.png"
import Instagram from "../assets/instagram_logo.png"
import Discord from "../assets/discord_logo.png"
import Patreon from "../assets/patreon_logo.png"
import UserInfo from "./UserInfo"
import "./Header.css"
import { Link } from "react-router-dom";



export default function Header() {

    return (
        <header>
            <div className="top">
                <Link to="/"><img className="logo" src={Logo} alt="Logo" /></Link>
                <h1 className="bctitle">Battle Cryptid</h1>
                <div className="top-info">
                    <UserInfo/>
                    <img className="social" src={Facebook} alt="facebook" />
                    <img className="social" src={Instagram} alt="instagram" />
                    <a target="_blank" rel="noreferrer" href="https://discord.gg/CjEjzEat4J" ><img className="social" src={Discord} alt="discord" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.patreon.com/user?u=14329310" ><img className="social" src={Patreon} alt="patreon" /></a>
                </div>
            </div>
            <ul className="nav">
                <li className="nav-item"><Link className="link" to="/home">Home</Link></li>
                <li className="nav-item"><Link className="link" to="/no-creation">Characters</Link></li>
                <li className="nav-item"><Link className="link" to="">The Arcanum</Link></li>
                <li className="nav-item"><Link className="link" to="">Feedback</Link></li>
                <li className="nav-item"><Link className="link" to="">Community</Link></li>
            </ul>
        </header>
    )
}