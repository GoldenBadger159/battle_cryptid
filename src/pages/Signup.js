import React, { useState} from "react";
import {Form, Button, Card, Alert, Container} from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const { signup } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    

    async function handleSubmit(e) {
        e.preventDefault()

        if(password !==
            passwordConfirm) {
                return setError('Passwords do not match')
            }
        
        try {
            setError('')
            setLoading(true)
            await signup(email, password)
            navigate("/finish-signup")
        } catch (error) {
            console.error("Error creating account: ", error)
            setError('Failed to create an account')
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
                            <h2 className="text-center mb-4">Sign Up</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" onChange={(e) => setPasswordConfirm(e.target.value)} />
                                </Form.Group>
                                <Button disabled={loading} className="w-100 text-center mt-2" type="submit"
                                    style={{backgroundColor: '#0b1321ff', color: '#67a170ff', border: '2px ridge #67a170ff'}}>Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}