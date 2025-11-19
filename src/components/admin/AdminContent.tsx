import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./adminStyles/admincontent.css";
import "./adminStyles/dashboardWelcome.css";
import { Link } from "react-router-dom";
export default function AdminContent() {
    const { pathname } = useLocation();
    const isRoot = pathname === "/admin";

    return (
        <>
            <Sidebar />

            <main className="admin-content">
                {isRoot ? <DashboardWelcome /> : <Outlet />}
            </main>
        </>
    );
}


function DashboardWelcome() {
    return (
        <div className="welcome-box">
            <h1>Welcome, Admin 👋</h1>
            <p className="welcome-subtext">
                Manage users, roles, teachers, students, and permissions.
            </p>

            <div className="welcome-actions">
                <Link to="/admin/users" className="welcome-btn">
                    View Users
                </Link>
                <Link to="/admin/create-user" className="welcome-btn secondary">
                    Create User
                </Link>
            </div>
        </div>
    );
}