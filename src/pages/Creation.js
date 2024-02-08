import React, { useState } from "react"
import "./Creation.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CreatorSurface from "../components/Creator/CreatorSurface"
import ProfilePic from "../assets/profile.png"

export default function Creation() {



    return (
        <>
            <Header />
            <div className="creator">
                <div className="creator-banner">
                    <img className="profile" alt="Profile" src={ProfilePic}/>
                    <h1 className="creator-title">Character Creator</h1>
                    <h1 className="character name">Character Name</h1>
                </div>
                <CreatorSurface />
                
            </div>
            <Footer />
        </>
    )
}