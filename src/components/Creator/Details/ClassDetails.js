import React, { useState } from "react";
import "./details.css"
import classes from "../../../JSON/classes.json"


export default function ClassDetails(props) {
    const data = Object.values(classes[props.class])
    console.log(data)

    // Code to seperate the quick creation description into paragraphs. 
    const quickArray = data[9].split("<>")

    const renderQuick = quickArray.map((item, index) => {
        return (
            <p className="race-desc" key={index} >{item}</p>
        )
    })


    return (
        <div className="details">
            <div className="detail-content">
                <h1>{data[0]}</h1> {/* cname = 0 */}
                <p>{data[8]}</p> {/* desc = 8*/}
                <h2>Class Features</h2>
                <p>Abjurers gain the following features:</p>
                <p>Hit Dice: 1d{data[1]}</p>
                <p>Defense Modifier: {data[2]}</p>
                <p>Agility Modifier: {data[3]}</p>
                <p>Martial Defense: {data[4]}</p>
                <p>Speed: {data[5]}</p>
                <p>Talent Points Per Level: {data[6]}</p>
                <p>Class Talents: {data[7]}</p>
                <h2>Creating an Abjurer</h2>
                {renderQuick}
                {/* Function call to selection renderer */}
            </div>
        </div>
    )
}