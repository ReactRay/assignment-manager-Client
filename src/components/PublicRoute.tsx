import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PublicRoute({ children }: any) {
    const { isAuthenticated, user } = useSelector((state: any) => state.auth);
    const location = useLocation();

    const path = location.pathname;

    // Only enforce redirect ON login/register
    const isAuthPage = path === "/login" || path === "/register";

    if (isAuthenticated && isAuthPage) {
        const role = user.roles[0];

        if (role === "Student") return <Navigate to="/student" replace />;
        if (role === "Teacher") return <Navigate to="/teacher" replace />;
        if (role === "Admin") return <Navigate to="/admin" replace />;
    }

    return children;
}
