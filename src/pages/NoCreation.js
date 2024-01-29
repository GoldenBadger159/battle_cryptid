import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom";
import { Card, Container} from 'react-bootstrap';


export default function NoCreation() {
    return (
        <div style={{ backgroundColor: "#0b1321ff" }}>
            <Header />
            <Container className="w-100 d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh", backgroundColor: "#0b1321ff", color: '#b7c1d3ff' }}
            >
                <div className="w-100" style={{ maxWidth: '400px' }}>
                    <Card style={{ backgroundColor: "#0b1321ff", color: '#b7c1d3ff', border: '3px ridge #b7c1d3ff' }}>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sorry! Character Creator Hasn't Been Created Yet</h2>
                            <p>I apologize for the inconvenience, but the character creator hasn't been fully developed yet.</p>
                            <p>If you would like to contribute to the developer to speed up the development process you can donate to the battle cryptid <a target="_blank" rel="noreferrer" href="https://www.patreon.com/user?u=14329310" >Patreon</a>.</p>
                            <p>The resources to create a character can be found in the <Link to="/arcanum">arcanum</Link>. We hope to see you in the world of Eldoric Adventurer!</p>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
            <Footer />
        </div>
    )
}