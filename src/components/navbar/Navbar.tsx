import "./navbar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    FiMenu,
    FiX,
    FiHome,
    FiBookOpen,
    FiLogIn,
    FiUserPlus,
    FiLogOut,
    FiUser,
    FiUsers,
    FiUserCheck,
    FiBook,
    FiClipboard,
    FiGrid
} from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authSlice";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();

    const { isAuthenticated, user } = useSelector((state: any) => state.auth);

    const isAdmin = isAuthenticated && user?.roles?.includes("Admin");
    const isTeacher = isAuthenticated && user?.roles?.includes("Teacher");
    const isStudent = isAuthenticated && user?.roles?.includes("Student");

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/">
                    <h2 className="nav-logo">SchoolsIT</h2>
                </Link>

                {/* Desktop menu */}
                <ul className="nav-links">
                    <li><Link to="/"><FiHome /> Home</Link></li>
                    <li><Link to="/guide"><FiBookOpen /> Guide</Link></li>

                    {/* DASHBOARDS BASED ON ROLE */}
                    {isAuthenticated && (
                        <>
                            {/* Admin Dashboard */}
                            {isAdmin && (
                                <li>
                                    <Link to="/admin">
                                        <FiUserCheck /> Admin Dashboard
                                    </Link>
                                </li>
                            )}

                            {/* Teacher Dashboard */}
                            {isTeacher ? (
                                <li>
                                    <Link to="/teacher">
                                        <FiBook /> Teacher Dashboard
                                    </Link>
                                </li>
                            ) : null}

                            {/* Student Dashboard */}
                            {isStudent ? (
                                <li>
                                    <Link to="/student">
                                        <FiClipboard /> Student Dashboard
                                    </Link>
                                </li>
                            ) : null}
                        </>
                    )}

                    {/* ADMIN ONLY LINKS */}
                    {isAdmin && (
                        <>
                            <li>
                                <Link to="/admin/users">
                                    <FiUsers /> Users
                                </Link>
                            </li>

                            <li>
                                <Link to="/admin/create-user">
                                    <FiUserCheck /> Create User
                                </Link>
                            </li>
                        </>
                    )}

                    {/* Not logged in */}
                    {!isAuthenticated && (
                        <>
                            <li><Link to="/login"><FiLogIn /> Login</Link></li>
                            <li><Link to="/register"><FiUserPlus /> Register</Link></li>
                        </>
                    )}

                    {/* Logged in */}
                    {isAuthenticated && (
                        <>
                            <li className="nav-user">
                                <FiUser /> {user.fullName}
                            </li>
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

                {/* MOBILE: ROLE DASHBOARDS */}
                {isAuthenticated && (
                    <>
                        {isAdmin && (
                            <li onClick={() => setOpen(false)}>
                                <Link to="/admin"><FiUserCheck /> Admin Dashboard</Link>
                            </li>
                        )}

                        {isTeacher ? (
                            <li onClick={() => setOpen(false)}>
                                <Link to="/teacher"><FiBook /> Teacher Dashboard</Link>
                            </li>
                        ) : null}

                        {isStudent ? (
                            <li onClick={() => setOpen(false)}>
                                <Link to="/student"><FiClipboard /> Student Dashboard</Link>
                            </li>
                        ) : null}
                    </>
                )}

                {/* ADMIN LINKS MOBILE */}
                {isAdmin && (
                    <>
                        <li onClick={() => setOpen(false)}>
                            <Link to="/admin/users"><FiUsers /> Users</Link>
                        </li>
                        <li onClick={() => setOpen(false)}>
                            <Link to="/admin/create-user"><FiUserCheck /> Create User</Link>
                        </li>
                    </>
                )}

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
