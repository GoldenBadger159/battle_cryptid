import React, {useState} from "react";
import "./CreatorDetails.css"


export default function CreatorDetails() {
    const [myState, setMyState] = useState({});
    // list of options
    const options = [
        {
            label: '16',
            value: '16'
        },
        {
            label: '14',
            value: '14-1'
        },
        {
            label: '14',
            value: '14-2'
        },
        {
            label: '12',
            value: '12-1'
        },
        {
            label: '12',
            value: '12-2'
        },
        {
            label: '10',
            value: '10'
        }
    ]

    // list of select names
    const selectNames = [
        "Strength:",
        "Dexterity:",
        "Constitution:",
        "Intelligence:",
        "Wisdom:",
        "Charisma:"
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

    const handleChange = (ev) => {
        setChosenOptions({...chosenOptions, [ev.target.name]: ev.target.value});
    };

    // Runs through the list of selector names provided above and creates the neccessary elements with corresponding labels
    const selectRender = selectNames.map((name, index) => {
        return (
            <>
                <label className="atr-label" for={name}>{name}</label>
                <select className="atr-select" name={name} key={index} onChange={handleChange} value={chosenOptions[name] || ''}
                        required={index === 0} >
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
        <div className="sub-selector">
            {/* TODO: set the form up to change the name and level of the character
            without having to press a submit button. do this using onChange and useState*/}
            <form id="char-info">
                <label for="char-name">Name:</label>
                <input type="text" id="char-name" name="char-name" />
                <label for="level">Level:</label>
                <select name="level" id="level">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="1">5</option>
                    <option value="1">6</option>
                    <option value="1">7</option>
                    <option value="1">8</option>
                    <option value="1">9</option>
                    <option value="1">10</option>
                    <option value="1">11</option>
                    <option value="1">12</option>
                    <option value="1">13</option>
                    <option value="1">14</option>
                    <option value="1">15</option>
                    <option value="1">16</option>
                    <option value="1">17</option>
                    <option value="1">18</option>
                    <option value="1">19</option>
                    <option value="1">20</option>
                </select>
            </form>
            <form id="attributes">
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
                
            </form>
        </div>
    )
}