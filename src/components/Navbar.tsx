import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/auth/authSlice";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();

    const { isAuthenticated, user } = useSelector((state: any) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <h2 className="nav-logo">StudentTeacher</h2>

                {/* DESKTOP LINKS */}
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>

                    {!isAuthenticated && (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    )}

                    {isAuthenticated && (
                        <>
                            <li>Welcome, {user.fullName}</li>
                            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
                        </>
                    )}
                </ul>

                {/* HAMBURGER */}
                <button className="nav-hamburger" onClick={() => setOpen(!open)}>
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <ul className={`mobile-menu ${open ? "open" : ""}`}>
                <li onClick={() => setOpen(false)}><Link to="/">Home</Link></li>

                {!isAuthenticated && (
                    <>
                        <li onClick={() => setOpen(false)}><Link to="/login">Login</Link></li>
                        <li onClick={() => setOpen(false)}><Link to="/register">Register</Link></li>
                    </>
                )}

                {isAuthenticated && (
                    <>
                        <li onClick={() => setOpen(false)}>Welcome, {user.fullName}</li>
                        <li onClick={() => { setOpen(false); handleLogout(); }}>
                            <button className="logout-btn">Logout</button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
