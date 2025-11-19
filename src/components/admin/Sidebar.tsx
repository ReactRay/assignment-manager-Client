import { NavLink } from "react-router-dom";
import { useState } from "react";
import './adminStyles/sidebar.css'
import { FaUsers, FaUserPlus, FaHome, FaBars } from "react-icons/fa";

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Mobile Toggle Button */}
            <button className="sidebar-toggle" onClick={() => setOpen(!open)}>
                <FaBars />
            </button>

            <div className={`sidebar ${open ? "open" : ""}`}>
                <div className="sidebar-top">
                    <FaHome className="sidebar-logo" />
                </div>

                <nav className="sidebar-menu">
                    <NavLink to="/admin/users" className="sidebar-item">
                        <FaUsers className="sidebar-icon" />
                        <span className="sidebar-label">Users</span>
                    </NavLink>

                    <NavLink to="/admin/create-user" className="sidebar-item">
                        <FaUserPlus className="sidebar-icon" />
                        <span className="sidebar-label">Create User</span>
                    </NavLink>

                </nav>
            </div>
        </>
    );
}
