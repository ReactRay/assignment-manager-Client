import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PublicRoute({ children }: any) {
    const { isAuthenticated, user } = useSelector((state: any) => state.auth);
    const location = useLocation();

    const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

    if (isAuthenticated && isAuthPage) {
        const roles = user.roles || [];

        // Always send admins to admin
        if (roles.includes("Admin")) return <Navigate to="/admin" replace />;

        if (roles.includes("Teacher")) return <Navigate to="/teacher" replace />;
        if (roles.includes("Student")) return <Navigate to="/student" replace />;
    }

    return children;
}
