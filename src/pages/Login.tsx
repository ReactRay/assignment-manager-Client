import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../redux/auth/authThunks";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const { status, error } = useSelector((state: any) => state.auth);

    const handleLogin = () => {
        if (!email || !password) return;

        dispatch(loginThunk({ email, password }))
            .unwrap()
            .then((res) => {
                const role = res.user.roles[0];

                if (role === "Student") navigate("/student");
                else if (role === "Teacher") navigate("/teacher");
                else if (role === "Admin") navigate("/admin");
            })
            .catch(() => {
                // error handled by redux state
            });
    };

    return (
        <section className="auth-container">
            <div className="auth-box">
                <h2>Welcome Back</h2>
                <p className="auth-subtitle">Login to continue</p>

                {/* ERROR MESSAGE */}
                {status === "failed" && (
                    <p style={{ color: "red", textAlign: "center", marginBottom: "10px" }}>
                        {error || "Invalid email or password"}
                    </p>
                )}

                <form onSubmit={(e) => e.preventDefault()}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="button"
                        className="auth-btn"
                        onClick={handleLogin}
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="auth-switch">
                    Don't have an account? <a href="/register">Register</a>
                </p>
            </div>
        </section>
    );
}
