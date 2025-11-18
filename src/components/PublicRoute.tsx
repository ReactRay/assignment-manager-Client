import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface Props {
    children: React.ReactNode;
}

export default function PublicRoute({ children }: Props) {
    const { isAuthenticated, user } = useSelector((state: any) => state.auth);

    if (isAuthenticated && user) {
        const role = user.roles[0];

        if (role === "Student") return <Navigate to="/student" replace />;
        if (role === "Teacher") return <Navigate to="/teacher" replace />;
        if (role === "Admin") return <Navigate to="/admin" replace />;
    }

    return children;
}
