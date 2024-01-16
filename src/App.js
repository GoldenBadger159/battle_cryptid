import React from "react";
import { AuthProvider } from "./contexts/AuthContext.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup.js';
import Home from "./pages/Home.js"
import Login from "./pages/Login.js"


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    
    
  );
}

export default App;
