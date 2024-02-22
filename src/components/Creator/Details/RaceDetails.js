import React, { useState } from "react";
import "./details.css"
import races from "../../../JSON/races.json"


export default function RaceDetails({ race, setStrMod, setDexMod, setConMod, setIntMod, setWisMod, setChaMod }) {
    const data = Object.values(races[race])

    //  Code used to render the description section of each race
    const descArray = data[1].split("<>")

    const renderDesc = descArray.map((item, index) => {
        return (
            <p className="race-desc" key={index} >{item}</p>
        )
    })

    // Code used to render the Ability Score modifiers and handle 
    // the case where the player chooses human and must customize their selections
    const abilityScores = data[3]
    const [chosenOptions, setChosenOptions] = useState({})

    function determinAbil() {
        const options = [
            {
                label: 2,
                value: "2-1"
            },
            {
                label: 2,
                value: "2"
            },
            {
                label: -2,
                value: "-2"
            },
            {
                label: 1,
                value: "1"
            }
        ]

        const abilNames = ["Str: ", "Dex: ", "Con: ", "Int: ", "Wis: ", "Cha: "]

        const isChosenByOther = (optionValue, atr) => {
            for (let key in chosenOptions) {
                if (key !== atr) {
                    if (chosenOptions[key] === optionValue) {
                        return true;
                    }
                }
            }
            return false;
        };
    
        const handleChange = (ev) => {
            setChosenOptions({...chosenOptions, [ev.target.name]: ev.target.value});
            let mod = 0
            if (ev.target.value === "2-1") {
                mod = 2
            } else if (ev.target.value === 0) {
                mod = 0
            } else {mod = parseInt(ev.target.value)}
            switch (ev.target.name) {
                case "Str: ":
                    setStrMod(mod)
                    break;
                case "Dex: ":
                    setDexMod(mod)
                    break;
                case "Con: ":
                    setConMod(mod)
                    break;
                case "Int: ":
                    setIntMod(mod)
                    break;
                case "Wis: ":
                    setWisMod(mod)
                    break;
                case "Cha: ":
                    setChaMod(mod)
                    break;
                default:
                    console.log("somehow palpatine returned")
            }
        };

        if (race === "human") {
            const renderAbilityScores = abilNames.map((item, index) => {
                return (
                    <>
                        <label className="atr-label" for={item}>{item}</label>
                        <select className="atr-select" name={item} key={index} onChange={handleChange} value={chosenOptions[item] || ''}
                                required={index === 0} >
                            <option value={0}/>
                            {options.filter(({value}) => !isChosenByOther(value, item))
                                .map(({label, value}, oIndex) =>
                                    <option value={value} key={oIndex}>{label}</option>)
                            }
                        </select>
                    </>
                )
            })
            return renderAbilityScores
        } else {
            const renderAbilityScores = Object.entries(abilityScores).map((item, index) => {
                switch (item[0]) {
                    case "Str":
                        setStrMod(item[1])
                        break;
                    case "Dex":
                        setDexMod(item[1])
                        break;
                    case "Con":
                        setConMod(item[1])
                        break;
                    case "Int":
                        setIntMod(item[1])
                        break;
                    case "Wis":
                        setWisMod(item[1])
                        break;
                    case "Cha":
                        setChaMod(item[1])
                        break;
                    default:
                        console.log("somehow palpatine returned")
                }
                if (item[1] === 0) {
                    return <></>
                } else {
                    return (
                        <>
                            <p className="atr" key={index} style={{ fontFamily: 'var(--copper)', marginBottom: '-10px'}}>{item[0]}: {item[1]}</p>
                        </>
                    )
                }
                
            })
            return renderAbilityScores
        }
    }
    
    // Code to generate the table for the racial abilities. 
    const abilData = Object.values(data[8])

    

    function determineRacialAbil() {
        if (race === "human") {
            return <p>{abilData}</p>
        } else {
            const renderRacialAbil = Object.entries(abilData).map((item, index) => {
                if (item[1].desc2) {
                    return (
                        <>
                            <h3 key={index}>Level: {item[1].level}</h3>
                            <div className="racial-abilities">
                                <label for={item[1].level + "desc1"} >Ability: 1 </label>
                                <p name={item[1].level + "desc1"}>{item[1].desc1}</p>
                                <label for={item[1].level + "desc2"}>Ability: 2 </label>
                                <p name={item[1].level + "desc2"}>{item[1].desc2}</p>
                            </div>
                        </>
                    )
                } else {
                    return (
                        <>
                            <h3 key={index}>Level: {item[1].level}</h3>
                            <div className="racial-abilities">
                                <label for={item[1].level + "desc1"} >Ability: 1 </label>
                                <p name={item[1].level + "desc1"}>{item[1].desc1}</p>
                            </div>
                        </>
                    )
                }
                
                
            })
            return renderRacialAbil
        }
    }
    
    return (
        <div className="details">
            <div className="detail-content" >
                <h1>{data[0]}</h1>
                <p>{renderDesc}</p>
                <h2>Recommended Classes</h2>
                <p>{data[2]}</p>
                <h2>Ability Score Modifiers</h2>
                <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                    {determinAbil()}
                </div>
                <br></br>
                <p>Speed: {data[4]}</p>
                <p>Mind and Body Modifier: {data[5]}</p>
                <p>Size: {data[6]}</p>
                <p>Languages: {data[7]}</p>
                <h2>Racial Abilities</h2>
                {determineRacialAbil()}
            </div>
            
        </div>
    )
}