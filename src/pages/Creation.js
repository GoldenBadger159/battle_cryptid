import React from "react"
import "./Creation.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CreatorSurface from "../components/Creator/CreatorSurface"
import ProfilePic from "../assets/profile.png"
import { AttributeContextProvider, useAttributeContext } from "../contexts/AttributeContext"


export default function Creation() {

    const {
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma
    } = useAttributeContext()

    return (
        <AttributeContextProvider>
            <Header />
            <div className="creator">
                <h1 className="creator-title">Character Creator</h1>
                <div className="creator-banner">
                    <img className="profile" alt="Profile" src={ProfilePic}/>
                    <div className="character-details">
                        <h1 className="character-name">Character Name</h1>
                        <h2>race class</h2>
                    </div>
                    <div className="banner-atr">
                        <label for="str">Strength: </label>
                        <p name="str">{strength}</p>
                        <label for="dex">Dexterity: </label>
                        <p name="dex">{dexterity}</p>
                        <label for="con">Constitution: </label>
                        <p name="con">{constitution}</p>
                        <label for="int">Intelligence: </label>
                        <p name="int">{intelligence}</p>
                        <label for="wis">Wisdom: </label>
                        <p name="wis">{wisdom}</p>
                        <label for="cha">Charisma: </label>
                        <p name="cha">{charisma}</p>
                    </div>
                </div>
                <CreatorSurface />
            </div>
            <Footer />
        </AttributeContextProvider>
    )
}