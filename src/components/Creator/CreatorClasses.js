import React, { useState } from "react";
import "./CreatorSub.css"
import classes from "../../JSON/classes.json"
import ClassDetails from "./Details/ClassDetails";

export default function CreatorClasses() {

    const [isSelected, setIsSelected] = useState("abjurer")

    const handleClick = (e) => {
        const id = e.target.id;
        setIsSelected(id);
        console.log(id);
    };

    const renderClasses = Object.values(classes).map((item, index) => {
        return (
            <button onClick={handleClick} className="button-selector" key={index} id={item.cname.toLowerCase()}>{item.cname}</button>
        )
    })

    return (
        <div className="sub-parent">
            <div className="sub-selector">
                <h1 className="sub-title">Select a Class</h1>
                {renderClasses}
                <p>Don't see a class that fits who you want to play as? 
                    Join our <a target="_blank" rel="noreferrer" href="https://discord.gg/CjEjzEat4J" >Discord</a> to 
                    suggest new class ideas and give feedback on existing classes.
                </p>
            </div>
            <ClassDetails class={isSelected}/>
        </div>
    )
}