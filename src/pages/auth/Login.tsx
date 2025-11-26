import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/authThunks";
import { type RootState } from "../../redux";
import "./auth.css";

// Icons
import { FiMail, FiLock, FiLogIn } from "react-icons/fi";

export default function Login() {
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const { status, error } = useSelector((state: RootState) => state.auth);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const result = await dispatch(loginThunk(form)).unwrap();

            const rawRole = result.user.roles?.[0] ?? "Student";
            const role = rawRole.charAt(0).toUpperCase() + rawRole.slice(1).toLowerCase();

            if (role === "Admin") navigate("/admin");
            else if (role === "Teacher") navigate("/teacher");
            else navigate("/student");

        } catch (_) { }
    };

    return (
        <section className="auth-container">
            <div className="auth-box">
                <h2>Welcome Back</h2>
                <p className="auth-subtitle">Login to continue</p>

                {status === "failed" && (
                    <p className="auth-error">
                        {error || "Invalid email or password"}
                    </p>
                )}

                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <div className="input-wrapper">
                        <FiMail />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <label>Password</label>
                    <div className="input-wrapper">
                        <FiLock />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={form.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="auth-btn"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Logging in..." : (
                            <>
                                <FiLogIn /> Login
                            </>
                        )}
                    </button>
                </form>

                <p className="auth-switch">
                    Don’t have an account? <a href="/register">Register</a>
                </p>
            </div>
        </section>
    );
}
