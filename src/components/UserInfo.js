import React from "react"
import "./Header.css"
import { useAuth } from '../contexts/AuthContext';
import { Link } from "react-router-dom";

export default function UserInfo() {
    const { currentUser } = useAuth()
    const { logout } = useAuth()

    

    async function handleLogout() {
        try {
            await logout()
        } catch (e) {
            console.error('Failed to logout', e)
        }
    }

    if (currentUser != null) {
        
        return (
            <>
                <p className="authorize" >Welcome </p>
                <p onClick={handleLogout} className="authorize">Logout</p>
            </>
        )
    } else {
        return(
            <>
                <Link className="authorize" to="/login">Login</Link>
                <Link className="authorize" to="/signup">Sign Up</Link>
            </>
        )
    }

}



            