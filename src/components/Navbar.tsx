import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";


export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <h2 className="nav-logo">StudentTeacher</h2>

                {/* DESKTOP LINKS */}
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>

                {/* HAMBURGER */}
                <button className="nav-hamburger" onClick={() => setOpen(!open)}>
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <ul className={`mobile-menu ${open ? "open" : ""}`}>
                <li onClick={() => setOpen(false)}><Link to="/">Home</Link></li>
                <li onClick={() => setOpen(false)}><Link to="/login">Login</Link></li>
                <li onClick={() => setOpen(false)}><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
}
