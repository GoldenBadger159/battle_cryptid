import React from "react"
import Logo from "../assets/Battle_Cryptid.png"
import "./Footer.css"
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="bottom">
                <Link to="/"><img className="foot-logo" src={Logo} alt="Logo" /></Link>
                <h1 className="foot-bctitle">Battle Cryptid</h1>
                <div className="links">
                    <h1>Quick Links</h1>
                    <Link className="foot-link" to="/">Home</Link>
                    <Link className="foot-link" to="">Character Builder</Link>
                    <Link className="foot-link" to="">Characters</Link>
                    <Link className="foot-link" to="">The Arcanum</Link>
                    <Link className="foot-link" to="">Feedback</Link>
                    <Link className="foot-link" to="">Community</Link>
                </div>
                <div className="links">
                    <h1>Contribute</h1>
                    <Link className="foot-link" to="">Discord</Link>
                    <Link className="foot-link" to="">Patreon</Link>
                    <Link className="foot-link" to="">Instagram</Link>
                    <Link className="foot-link" to="">Facebook</Link>
                    <Link className="foot-link" to="">Beta Test</Link>
                    <Link className="foot-link" to="">Fanart</Link>
                </div>
            </div>
            <div className="copyright">&copy; {(new Date().getFullYear())} Battle Cryptid〡All Rights Reserved</div>
        </footer>
    )
}