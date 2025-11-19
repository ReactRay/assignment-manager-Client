import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import './auth.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { status, error } = useSelector((state: any) => state.auth);

    const handleLogin = () => {
        dispatch(loginUser(email, password, navigate) as any);
    };

    return (
        <section className="auth-container">
            <div className="auth-box">
                <h2>Welcome Back</h2>
                <p className="auth-subtitle">Login to continue</p>


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
