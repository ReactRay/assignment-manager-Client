import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/authThunks";
import { type RootState } from "../../redux";
import "./auth.css";

export default function Login() {
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const { status, error } = useSelector((state: RootState) => state.auth);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
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

        } catch (_) {
            //redux will handle
        }
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
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        className="auth-btn"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="auth-switch">
                    Don’t have an account? <a href="/register">Register</a>
                </p>
            </div>
        </section>
    );
}
