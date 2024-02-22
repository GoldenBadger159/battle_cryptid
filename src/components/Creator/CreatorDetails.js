import React, {useState} from "react";
import "./CreatorSub.css"
import Details from "./Details/Details";


export default function CreatorDetails({ setItem, setValue, setCharName, setLevel }) {
    // list of options
    const options = [
        {
            label: '16',
            value: '16'
        },
        {
            label: '14',
            value: '14'
        },
        {
            label: '14',
            value: '14-1'
        },
        {
            label: '12',
            value: '12'
        },
        {
            label: '12',
            value: '12-1'
        },
        {
            label: '10',
            value: '10'
        }
    ]

    // list of select names
    const selectNames = [
        "Strength",
        "Dexterity",
        "Constitution",
        "Intelligence",
        "Wisdom",
        "Charisma"
    ]

    const [chosenOptions, setChosenOptions] = useState({});


    // remove the option when chosen by another selector
    const isChosenByOther = (optionValue, selectName) => {
        for (let key in chosenOptions) {
            if (key !== selectName) {
                if (chosenOptions[key] === optionValue) {
                    return true;
                }
            }
        }
        return false;
    };

    // handles changes to the attribute selectors
    const handleChange = (ev) => {
        setChosenOptions({...chosenOptions, [ev.target.name]: ev.target.value});
        let value = 0
        if (ev.target.value === "14-1") {
           value = 14
        } else if (ev.target.value === "12-1") {
            value = 12
        } else if (ev.target.value === "") {
            value = 10
        } else {value = parseInt(ev.target.value)}
        setItem(ev.target.name)
        setValue(value)
    };

    // Handles changes to the character name after an amount of inactivity.
    const nameChange = (e) => {
        setTimeout(() => {
            if (e.target.value === "") {
                setCharName("Character Name")
            } else {
                setCharName(e.target.value)
            }
        }, 1500)
    }
    // Handles changes to the characters level
    const lvlChange = (e) => {
        setLevel(e.target.value)
    }

    // Runs through the list of selector names provided above and creates the neccessary elements with corresponding labels
    const selectRender = selectNames.map((name, index) => {
        return (
            <>
                <label for={name}>{name}:</label>
                <select name={name} key={index} onChange={handleChange} value={chosenOptions[name] || ''}
                        required={index === 0} id={name}>
                    <option value=''/>
                    {options.filter(({value}) => !isChosenByOther(value, name))
                        .map(({label, value}, oIndex) =>
                            <option value={value} key={oIndex}>{label}</option>)
                    }
                </select>
            </>
        )
    })
    
    return (
        <div className="sub-parent">
            <div className="sub-selector">
                {/* TODO: set the form up to change the name and level of the character
                without having to press a submit button. do this using onChange and useState*/}
                <div id="char-info">
                    <label for="char-name">Name:</label>
                    <input type="text" id="char-name" name="char-name" onChange={nameChange}/>
                    <label for="level">Level:</label>
                    <select name="level" id="level" onChange={lvlChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </select>
                </div>
                <div id="attributes" >
                    <h1>Character Attributes</h1>
                    <p>Characters have 6 Defining Scores: Strength (Str), Constitution (Con), Dexterity (Dex), 
                        Intelligence (Int), Wisdom (Wis), and Charisma (Cha). As your character will essentially 
                        be a combination of statistics and ability scores, it is important to define which scores 
                        should be higher or lower to match what type of character you want to play. 
                    </p>
                    <p>Each character will be given the same pool of 6 numbers to choose from to divide between 
                        the Defining Scores (be aware that your choice of race will increase or decrease different scores); 
                        16, 14, 14, 12, 12, and 10.
                    </p>
                    <div className="atr-selectors">
                        {selectRender}
                    </div>
                </div>
            </div>
            <Details />
        </div>
        
    )
}