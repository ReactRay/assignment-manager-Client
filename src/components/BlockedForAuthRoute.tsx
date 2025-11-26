import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { type RootState } from "../redux";
import type React from "react";

export default function BlockedForAuthRoute({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

    if (!isAuthenticated) return children;

    const rawRole = user?.roles?.[0] ?? "Student";
    const role = rawRole.charAt(0).toUpperCase() + rawRole.slice(1).toLowerCase();

    if (role === "Admin") return <Navigate to="/admin" replace />;
    if (role === "Teacher") return <Navigate to="/teacher" replace />;

    return <Navigate to="/student" replace />;
}
