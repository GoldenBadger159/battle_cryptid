import React from "react"
import "./Home.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BookCard from "../components/BookCard"
import GuideBook from "../assets/adventure.jpg"


export default function Home() {
    return (
        <>
            <Header />
            <div className="section1">
                <div>
                    <BookCard 
                        title="General Guide Book" 
                        img={GuideBook}
                        mainDesc="The base edition rule book for players and game masters alike"
                        subDesc="This book will outline the rules as well as walk players through creating their characters"
                        // TODO: Add link to book
                    />
                    <BookCard 
                        title="General Guide Book" 
                        img={GuideBook}
                        mainDesc="The base edition rule book for players and game masters alike"
                        subDesc="This book will outline the rules as well as walk players through creating their characters"
                        // TODO: Add link to book
                    />
                </div>
            </div>
            <Footer />
        </>
       
    )
}