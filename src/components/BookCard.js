import React from "react"
import "./BookCard.css"
import { propTypes } from "react-bootstrap/esm/Image"
import { Link } from "react-router-dom"


function BookCard(props) {
    return (
        <div className="book-card">
            <h1 className="book-title">{props.title}</h1>
            <img src={props.img} alt="Book Cover" />
            <p className="main-desc">{props.mainDesc}</p>
            <p className="sub-desc">{props.subDesc}</p>
            <Link className="open-book" to={props.bookPath}>Open Book</Link>
        </div>
    )
}
BookCard.propTypes = {
    title: propTypes.string,
    img: propTypes.string,
    mainDesc: propTypes.string,
    subDesc: propTypes.string,
    bookPath: propTypes.string
}
BookCard.defaultProps = {
    title: "Book Title here",
    img: "",
    mainDesc: "Use this area to give a description of the book",
    subDesc: "Use this area to give a description of the use cases of the book. Why and when it'd be referenced",
    bookPath: ""
}


export default BookCard