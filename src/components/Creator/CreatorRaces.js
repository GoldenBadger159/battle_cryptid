import React, { useState } from "react";
import "./CreatorSub.css"
import races from "../../JSON/races.json"
import RaceDetails from "./Details/RaceDetails";


export default function CreatorRaces() {

    const [isSelected, setIsSelected] = useState("human")

    const handleClick = (e) => {
        const id = e.target.id;
        setIsSelected(id);
        console.log(id);
    };

    const renderRaces = Object.values(races).map((item, index) => {
        return (
            <button onClick={handleClick} className="button-selector" key={index} id={item.name.toLowerCase()}>{item.name}</button>
        )
    })

    return (
        <div className="sub-parent">
            <div className="sub-selector">
                <h1 className="sub-title">Select a Race</h1>
                {renderRaces}
                <p>Don't see a race that fits who you want to play as? 
                    Join our <a target="_blank" rel="noreferrer" href="https://discord.gg/CjEjzEat4J" >Discord</a> to 
                    suggest new race ideas and give feedback on existing races.
                </p>
            </div>
            <RaceDetails race={isSelected}/>
        </div>
    )
}