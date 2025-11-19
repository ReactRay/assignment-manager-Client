import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RoleRoute({ children, allowed }: any) {

    const { isAuthenticated, user, loaded } = useSelector((s: any) => s.auth);

    // Wait until auth is loaded
    if (!loaded) return null;  // or a spinner

    if (!isAuthenticated) return <Navigate to="/login" replace />;

    const roles = user?.roles || [];

    // Admin bypass
    if (roles.includes("Admin")) return children;

    const isAllowed = allowed.some((r: string) => roles.includes(r));

    if (!isAllowed) return <Navigate to="/not-authorized" replace />;

    return children;
}
