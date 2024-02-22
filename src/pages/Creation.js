import React, {useEffect, useState} from "react"
import "./Creation.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CreatorSurface from "../components/Creator/CreatorSurface"
import ProfilePic from "../assets/profile.png"

export default function Creation() {
    // The 4 characteristics of a character
    const [charName, setCharName] = useState("Character Name")
    const [level, setLevel] = useState(1)
    const [race, setRace] = useState("Race")
    const [mainClass, setMainClass] = useState("Class")

    useEffect (() => {
        console.log(charName)
        console.log(race)
        console.log(mainClass)
        console.log(level)
    }, [charName, race, mainClass, level])

    // The states for the 6 attributes
    const [strength, setStrength] = useState(10)
    const [dexterity, setDexterity] = useState(10)
    const [constitution, setConstitution] = useState(10)
    const [intelligence, setIntelligence] = useState(10)
    const [wisdom, setWisdom] = useState(10)
    const [charisma, setCharisma] = useState(10)
    // The states for the racial modifiers to the 6 attributes
    const [strMod, setStrMod] = useState(0)
    const [dexMod, setDexMod] = useState(0)
    const [conMod, setConMod] = useState(0)
    const [intMod, setIntMod] = useState(0)
    const [wisMod, setWisMod] = useState(0)
    const [chaMod, setChaMod] = useState(0)
    // The name of the variable changed and the value it is changed to
    const [item, setItem] = useState()
    const [value, setValue] = useState()

    useEffect(() => {
        switch (item) {
            case "Strength":
                setStrength(value)
                break;
            case "Dexterity":
                setDexterity(value)
                break;
            case "Constitution":
                setConstitution(value)
                break;
            case "Intelligence":
                setIntelligence(value)
                break;
            case "Wisdom":
                setWisdom(value)
                break;
            case "Charisma":
                setCharisma(value)
                break;
            default:
                console.log("selector not recognized")
        }
    }, [item, value ])

    useEffect(() => {
        console.log(strMod)
        console.log(dexMod)
        console.log(conMod)
        console.log(intMod)
        console.log(wisMod)
        console.log(chaMod)
    }, [strMod, dexMod, conMod, intMod, wisMod, chaMod])

    return (
        <>
            <Header />
            <div className="creator">
                <h1 className="creator-title">Character Creator</h1>
                <div className="creator-banner">
                    <img className="profile" alt="Profile" src={ProfilePic}/>
                    <div className="character-details">
                        <h1 className="character-name">{charName}</h1>
                        <h2>{"Lvl: " + level + " " + race + " " + mainClass}</h2>
                    </div>
                    <div className="banner-atr">
                        <label for="str">Strength: </label>
                        <p name="str">{strength + strMod}</p>
                        <label for="dex">Dexterity: </label>
                        <p name="dex">{dexterity + dexMod}</p>
                        <label for="con">Constitution: </label>
                        <p name="con">{constitution + conMod}</p>
                        <label for="int">Intelligence: </label>
                        <p name="int">{intelligence + intMod}</p>
                        <label for="wis">Wisdom: </label>
                        <p name="wis">{wisdom + wisMod}</p>
                        <label for="cha">Charisma: </label>
                        <p name="cha">{charisma + chaMod}</p>
                    </div>
                </div>
                <CreatorSurface setItem={setItem} setValue={setValue} setCharName={setCharName}
                    setLevel={setLevel} setMainClass={setMainClass} setRace={setRace} 
                    setStrMod={setStrMod} setDexMod={setDexMod} setConMod={setConMod}
                    setIntMod={setIntMod} setWisMod={setWisMod} setChaMod={setChaMod}
                />
            </div>
            <Footer />
        </>
    )
}