import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface Props {
    children: React.ReactNode;
    allowedRoles?: string[];
}

export default function ProtectedRoute({ children, allowedRoles }: Props) {
    const { isAuthenticated, user } = useSelector((state: any) => state.auth);

    if (!isAuthenticated) return <Navigate to="/login" replace />;

    const role = user?.roles?.[0];

    if (allowedRoles && !allowedRoles.includes(role)) {
        return <Navigate to="/not-authorized" replace />;
    }

    return children;
}
