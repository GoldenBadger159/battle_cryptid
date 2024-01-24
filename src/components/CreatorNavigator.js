import React from "react"
// import { Link } from "react-router-dom";
import "./CreatorNavigator.css"


export default function CreatorNavigator() {
    return (
        <div className="selector">
            <h1>Create your character using the sections below</h1>
            <button id="char-details" type="submit">Details</button>
            <button id="char-race" type="submit">Race</button>
            <button id="char-class" type="submit">Class</button>
            <button id="char-equipment" type="submit">Equipment</button>
            <button id="save-char" type="submit">Save Character</button>
            <button id="char-sheet" type="submit">Character Sheet</button>
        </div>
    )
}