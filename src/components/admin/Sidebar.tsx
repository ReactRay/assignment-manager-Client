import { NavLink } from "react-router-dom";
import "./adminStyles/sidebar.css";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">Admin</h2>

            <nav className="sidebar-nav">
                <NavLink to="/admin/users" className="side-item">
                    👤 Users
                </NavLink>

                <NavLink to="/admin/create-user" className="side-item">
                    ➕ Create User
                </NavLink>

                <NavLink to="/admin/roles" className="side-item">
                    🔒 Roles
                </NavLink>
            </nav>
        </div>
    );
}
