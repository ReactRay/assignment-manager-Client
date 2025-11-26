import "./navbar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiHome, FiBookOpen, FiLogIn, FiUserPlus, FiLogOut, FiUser } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authSlice";

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
                <Link to='/'>
                    <h2 className="nav-logo">SchoolsIT</h2>
                </Link>

                {/* Desktop menu */}
                <ul className="nav-links">
                    <li><Link to="/"><FiHome /> Home</Link></li>
                    <li><Link to="/guide"><FiBookOpen /> Guide</Link></li>

                    {!isAuthenticated && (
                        <>
                            <li><Link to="/login"><FiLogIn /> Login</Link></li>
                            <li><Link to="/register"><FiUserPlus /> Register</Link></li>
                        </>
                    )}

                    {isAuthenticated && (
                        <>
                            <li className="nav-user"><FiUser /> {user.fullName}</li>
                            <li>
                                <button onClick={handleLogout} className="logout-btn">
                                    <FiLogOut /> Logout
                                </button>
                            </li>
                        </>
                    )}
                </ul>

                {/* Mobile hamburger */}
                <button className="nav-hamburger" onClick={() => setOpen(!open)}>
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile menu */}
            <ul className={`mobile-menu ${open ? "open" : ""}`}>
                <li onClick={() => setOpen(false)}>
                    <Link to="/"><FiHome /> Home</Link>
                </li>
                <li onClick={() => setOpen(false)}>
                    <Link to="/guide"><FiBookOpen /> Guide</Link>
                </li>

                {!isAuthenticated && (
                    <>
                        <li onClick={() => setOpen(false)}>
                            <Link to="/login"><FiLogIn /> Login</Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link to="/register"><FiUserPlus /> Register</Link>
                        </li>
                    </>
                )}

                {isAuthenticated && (
                    <>
                        <li onClick={() => setOpen(false)}>
                            <FiUser /> {user.fullName}
                        </li>

                        <li onClick={() => { setOpen(false); handleLogout(); }}>
                            <button className="logout-btn">
                                <FiLogOut /> Logout
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
