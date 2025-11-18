import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type React from "react";

interface Props {
    children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
    const isAuthenticated = useSelector(
        (state: any) => state.auth.isAuthenticated
    );

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}
