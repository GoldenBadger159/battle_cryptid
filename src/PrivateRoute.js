import React from "react"
import { useAuth } from "./contexts/AuthContext.js";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const { currentUser } = useAuth();
  
    return currentUser ? <Outlet/> : <Navigate to="/login" />;
  }