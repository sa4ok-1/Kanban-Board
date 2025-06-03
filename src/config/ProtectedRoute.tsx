
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = true; 
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}