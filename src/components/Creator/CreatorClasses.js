import React, { useState } from "react";
import "./CreatorSub.css"
import classes from "../../JSON/classes.json"
import ClassDetails from "./Details/ClassDetails";

export default function CreatorClasses({ setMainClass }) {

    const [isSelected, setIsSelected] = useState("abjurer")

    const handleClick = (e) => {
        const id = e.target.id;
        setIsSelected(id);
        console.log(id);
    };

    const classChoice = (e) => {
        const data = Object.values(classes[e.target.id])
        setMainClass(data[0])
    }

    const renderClasses = Object.values(classes).map((item, index) => {
        return (
            <div className="button-selector" onClick={handleClick} id={item.cname.toLowerCase()}>
                <button onClick={handleClick} className="option-name" key={index} id={item.cname.toLowerCase()}>{item.cname}</button>
                <button onClick={classChoice} className="choose-item" id={item.cname.toLowerCase()}>Select Class</button>
            </div>
            
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