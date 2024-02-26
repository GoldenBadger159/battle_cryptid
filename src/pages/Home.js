import React from "react"
import "./Home.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BookCard from "../components/BookCard"
import GuideBook from "../assets/adventure.jpg"
import Compendium from "../assets/werewolf.png"
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <>
            <Header />
            <div className="section1">
                <div className="home-books">
                    <BookCard 
                        title="General Guide Book" 
                        img={GuideBook}
                        mainDesc="The base edition rule book for players and game masters alike"
                        subDesc="This book will outline the rules as well as walk players through creating their characters"
                        // TODO: Add link to book
                    />
                    <BookCard 
                        title="Cryptid Compendium" 
                        img={Compendium}
                        mainDesc="The accompanying bestiary for Battle Cryptid"
                        subDesc="This book will expand the lore of the world and present you with descriptions and abilities of the vast array of cryptids"
                        // TODO: Add link to book
                    />
                    <BookCard 
                        title="Player Resources" 
                        img={GuideBook}
                        mainDesc="A collection of character and follower sheets"
                        subDesc="This resource is for players and Game Masters who prefer the pen and paper approuch to TTRPG gaming"
                        // TODO: Add link to book
                    />
                </div>
                <div className="about">
                    <h1>About BC</h1>
                    <p>Battle Cryptid is a Table Top Role Playing Game (TTRPG) created to offer a different cast of races, classes, 
                        and monsters than your traditional fantasy setting. By using influences from many different real world cultures, 
                        the world of Puter was born, combining the aspects and mythologies into one dynamic ecosystem. Battle cryptid 
                        distinguishes itself from other TTRPGs, like DnD, by putting a focus on the players ability to interact with the 
                        elements, people, and lore in the world of Puter. Class skills and spells shift from, "I do this and get this result", 
                        to "By combining the effects of these several things my enemies are affected this way".
                    </p>
                </div>
            </div>
            <div className="section2">
                <div className="creation">
                    <h1>Create Your Character!</h1>
                    <p>Whether you're a seasoned adventurer or a newcomer to the realm of tabletop gaming, our user-friendly tool is your gateway 
                        to crafting the hero you've always envisioned.
                    </p>
                    <p>Effortlessly navigate through a user-friendly interface designed for both beginners and seasoned veterans. 
                        Tailor your character with an extensive array of races, classes, spell schools, and abilities. Step-by-step guidance 
                        ensures that even first-time players can create a character without missing crucial details. Easily share your 
                        character sheets with Game Masters and fellow players, fostering collaboration and camaraderie. 
                    </p>
                    <p>Craft your unique persona, define your strengths, and embark on adventures that will shape the destiny of your character. 
                        Dive into a world of endless possibilities and epic storytelling.
                    </p>
                    <Link className="mid-home" to="/creation">Create Today!</Link>
                </div>
                <div className="discord">
                    <h1>Join Our Discord!</h1>
                    <p>The Official Battle Cryptid Discord Server is a hub dedicated to answering your queries, keeping you in the loop about community updates,
                        and fostering creativity. Engage with fellow memebers to share your ideas, concept art, and contribute to the ever-expanding lore. 
                        Find-like minded adventurers to form groups and embark on thrilling quests together. Join us on this cryptic journey, where curiosity meets comraderie!
                    </p>
                    <a className="mid-home" target="_blank" rel="noreferrer" href="https://discord.gg/CjEjzEat4J" >Join Now!</a>
                </div>
                <div className="news">
                    <h1>Newest Developments</h1>
                    <div class="news-content">
                        <h2>Bestiary Has Been Updated!</h2>
                        <p>Embark on a journey of discovery with our latest update to the Bestiary! We are thrilled to announce the addition of several captivating 
                            creatures waiting to be encountered on your adventures. From mystical beings to fearsome monsters, our expanded bestiary promises an enriched 
                            and thrilling gaming experience.
                        </p>
                        <p>Feel the pulse of the gaming community as players share their encounters, strategies, and awe-inspiring tales of facing these newfound creatures. 
                            Join the conversation on our discord server, share your own experiences, and forge alliances with fellow adventurers.
                        </p>
                        <p>Keep your eyes peeled for future updates, as we continue to expand and enhance your gaming experience. The Bestiary awaits—venture forth and write 
                            your own legendary tale!
                        </p>
                        <p>Happy adventuring!</p>
                        <Link className="mid-home" to="">See Other News</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
       
    )
}