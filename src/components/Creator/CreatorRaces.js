import React, { useEffect, useState } from "react";
import "./CreatorSub.css"
import races from "../../JSON/races.json"
import RaceDetails from "./Details/RaceDetails";


export default function CreatorRaces({ setRace, setStrMod, setDexMod, setConMod, setIntMod, setWisMod, setChaMod }) {
    const [isSelected, setIsSelected] = useState("human")

    const [modStr, setModStr] = useState(0)
    const [modDex, setModDex] = useState(0)
    const [modCon, setModCon] = useState(0)
    const [modInt, setModInt] = useState(0)
    const [modWis, setModWis] = useState(0)
    const [modCha, setModCha] = useState(0)

    useEffect(() => {
        console.log(modStr)
        console.log(modDex)
        console.log(modCon)
        console.log(modInt)
        console.log(modWis)
        console.log(modCha)
    }, [modStr, modDex, modCon, modInt, modWis, modCha])

    const handleClick = (e) => {
        const id = e.target.id;
        setIsSelected(id);
        console.log(id);
    };

    const raceChoice = (e) => {
        const data = Object.values(races[e.target.id])
        setRace(data[0])
        setStrMod(modStr)
        setDexMod(modDex)
        setConMod(modCon)
        setIntMod(modInt)
        setWisMod(modWis)
        setChaMod(modCha)
    }

    const renderRaces = Object.values(races).map((item, index) => {
        return (
            <div className="button-selector" onClick={handleClick} id={item.name.toLowerCase()}>
                <button onClick={handleClick} className="option-name" key={index} id={item.name.toLowerCase()}>{item.name}</button>
                <button onClick={raceChoice} className="choose-item" id={item.name.toLowerCase()}>Select Race</button>
            </div>
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
            <RaceDetails race={isSelected} 
                setStrMod={setModStr} setDexMod={setModDex} setConMod={setModCon}
                setIntMod={setModInt} setWisMod={setModWis} setChaMod={setModCha} />
        </div>
    )
}