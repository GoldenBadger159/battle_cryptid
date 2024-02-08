import React, { useState } from "react"
import CreatorDetails from "./CreatorDetails"
import CreatorClasses from "./CreatorClasses"
import CreatorRaces from "./CreatorRaces"
import CreatorEquipment from "./CreatorEquipment"
import "./CreatorSurface.css"


export default function CreatorSurface() {
    const [isSelected, setIsSelected] = useState()

    const handleClick = (e) => {
        const id = e.target.id;
        setIsSelected(id);
        console.log(id);
    };

    const renderChild = () => {
        switch (isSelected) {
            case "details":
                return <CreatorDetails />
            case "race":
                return <CreatorRaces />
            case "class": 
                return <CreatorClasses />
            case "equipment":
                return <CreatorEquipment />
            default:
                return <CreatorDetails />
        }
    }

    return (
        <div className="parent">
            <div className="selector">
                <h1>Create your character using the sections below</h1>
                <button onClick={handleClick} id="details" >Details</button>
                <button onClick={handleClick} id="race" >Race</button>
                <button onClick={handleClick} id="class" >Class</button>
                <button onClick={handleClick} id="equipment" >Equipment</button>
                <button onClick={handleClick} id="save" >Save Character</button>
                <button onClick={handleClick} id="sheet" >Character Sheet</button>
            </div>
            {renderChild()}
        </div>
        
    )
}