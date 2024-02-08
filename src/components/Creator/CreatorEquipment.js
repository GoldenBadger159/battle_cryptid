import React from "react";
import "./CreatorSub.css"
import EquipmentDetails from "./Details/EquipmentDetails"

export default function CreatorEquipment() {
    return (
        <div className="sub-parent">
            <div className="sub-selector">
                <h1 className="sub-title">Gather Your Gear</h1>

                <p>Want to help complete the gear list? 
                    Join our <a target="_blank" rel="noreferrer" href="https://discord.gg/CjEjzEat4J" >Discord</a> to 
                    suggest new weapon, armor, or other gear ideas and give feedback on existing stat blocks.</p>
            </div>
            <EquipmentDetails />
        </div>
        
    )
}