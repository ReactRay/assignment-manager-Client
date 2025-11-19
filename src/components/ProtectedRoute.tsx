import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface Props {
    children: React.ReactNode;
    allowedRoles?: string[];
}

export default function ProtectedRoute({ children, allowedRoles }: Props) {
    const { isAuthenticated, user } = useSelector((state: any) => state.auth);

    if (!isAuthenticated) return <Navigate to="/login" replace />;

    const roles: string[] = user?.roles || [];

    // 🔥 RULE 1: Admin always allowed
    if (roles.includes("Admin")) {
        return children;
    }

    // 🔥 RULE 2: Non-admin must match allowedRoles
    if (allowedRoles && !roles.some(r => allowedRoles.includes(r))) {
        return <Navigate to="/not-authorized" replace />;
    }

    return children;
}
