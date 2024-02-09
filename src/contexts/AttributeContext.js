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

    const value = {
        strength,
        setStrength,
        dexterity,
        setDexterity,
        constitution,
        setConstitution,
        intelligence,
        setIntelligence,
        wisdom,
        setWisdom,
        charisma,
        setCharisma
    }

    return (
        <AttributeContext.Provider value={value}>
            {children}
        </AttributeContext.Provider>
    )
}