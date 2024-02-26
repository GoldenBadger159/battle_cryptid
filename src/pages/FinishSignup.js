import React, { useState} from "react";
import app from "../firebase"
import { doc, getFirestore, setDoc } from "firebase/firestore"
import {Form, Button, Card, Alert, Container} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function FinishSignup() {
    const db = getFirestore(app)
    const { currentUser } = useAuth()
    const [error, setError] = useState('')
    const [username, setUsername] = useState("")
    const navigate = useNavigate("/")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        const uid = currentUser.uid
        const email = currentUser.email

        try {
            setLoading(true)
            setError("")
            console.log(uid)
            console.log(email)
            console.log(username)
            await setDoc(doc(db, "users", uid), {
                username: username, 
                email: email
            })
            navigate("/")
        } catch (error){
            console.error("Error adding document: ", error)
            setError("Failed to complete signup")
        }

        setLoading(false)
    }

    return (
        <div style={{ backgroundColor: "#0b1321ff" }}>
            <Header />
            <Container className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh", backgroundColor: "#0b1321ff", color: '#b7c1d3ff' }}
            >
                <div className="w-100" style={{ maxWidth: '400px' }}>
                    <Card style={{ backgroundColor: "#0b1321ff", color: '#b7c1d3ff', border: '3px ridge #b7c1d3ff' }}>
                        <Card.Body>
                            <h2 className="text-center mb-4">Finish Setting Up Your Account</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" onChange={(e) => {setUsername(e.target.value)}} />
                                </Form.Group>
                                <Button disabled={loading} className="w-100 text-center mt-2" type="submit"
                                    style={{backgroundColor: '#0b1321ff', color: '#67a170ff', border: '2px ridge #67a170ff'}}>Finish Signup</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
            <Footer />
        </div>
    )
}