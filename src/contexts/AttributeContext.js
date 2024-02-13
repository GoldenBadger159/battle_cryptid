import React, { useContext, useState } from 'react';

const AttributeContext = React.createContext({
    strength: "10",
    dexterity: "10",
    constitution: "10",
    intelligence: "10",
    wisdom: "10",
    charisma: "10"
})

export function useAttributeContext() {
    return (useContext(AttributeContext))
}

export function AttributeContextProvider({children}) {
    const [strength, setStrength] = useState("10")
    const [dexterity, setDexterity] = useState("10")
    const [constitution, setConstitution] = useState("10")
    const [intelligence, setIntelligence] = useState("10")
    const [wisdom, setWisdom] = useState("10")
    const [charisma, setCharisma] = useState("10")

    const updateStr = (value) => {
        if (value === "") {
            console.log("nothing changed. Selection empty")
        } else {
            console.log(value)
            setStrength(value)
        }
        console.log(strength)
    }

    const updateDex = (value) => {
        if (value === "") {
            console.log("nothing changed. Selection empty")
        } else {
            console.log(value)
            setDexterity(value)
        }
        console.log(dexterity)
    }

    const updateCon = (value) => {
        if (value === "") {
            console.log("nothing changed. Selection empty")
        } else {
            console.log(value)
            setConstitution(value)
        }
        console.log(constitution)
    }

    const updateInt = (value) => {
        if (value === "") {
            console.log("nothing changed. Selection empty")
        } else {
            console.log(value)
            setIntelligence(value)
        }
        console.log(intelligence)
    }

    const updateWis = (value) => {
        if (value === "") {
            console.log("nothing changed. Selection empty")
        } else {
            console.log(value)
            setWisdom(value)
        }
        console.log(wisdom)
    }

    const updateCha = (value) => {
        if (value === "") {
            console.log("nothing changed. Selection empty")
        } else {
            console.log(value)
            setCharisma(value)
        }
        console.log(charisma)
    }

    const value = {
        strength,
        updateStr,
        dexterity,
        updateDex,
        constitution,
        updateCon,
        intelligence,
        updateInt,
        wisdom,
        updateWis,
        charisma,
        updateCha
    }

    return (
        <AttributeContext.Provider value={value}>
            {children}
        </AttributeContext.Provider>
    )
}