import { NavLink } from "react-router-dom";

import './adminStyles/sidebar.css'
import {
    FaUsers,
    FaUserPlus,
    FaHome,
    FaBuilding,
    FaChalkboardTeacher
} from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <FaHome className="sidebar-logo" />
            </div>

            <nav className="sidebar-menu">



                <NavLink
                    to="/admin/users"
                    className="sidebar-item"
                >
                    <FaUsers className="sidebar-icon" />
                    <span className="sidebar-label">Users</span>
                </NavLink>

                <NavLink
                    to="/admin/create-user"
                    className="sidebar-item"
                >
                    <FaUserPlus className="sidebar-icon" />
                    <span className="sidebar-label">Create User</span>
                </NavLink>


            </nav>
        </div>
    );
}
