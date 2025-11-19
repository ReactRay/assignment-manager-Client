import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../actions/authActions";

export default function Register() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("Student");

    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const { status, error } = useSelector((state: any) => state.auth);

    const handleRegister = () => {
        dispatch(registerUser(fullName, email, password, role, navigate) as any);
    };

    return (
        <section className="auth-container">
            <div className="auth-box">
                <h2>Create Account</h2>
                <p className="auth-subtitle">Join our platform</p>

                {status === "failed" && (
                    <p style={{ color: "red", marginBottom: "10px", textAlign: "center" }}>
                        {error || "Registration failed"}
                    </p>
                )}

                <form onSubmit={(e) => e.preventDefault()}>
                    <label>Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />

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
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />



                    <button
                        type="button"
                        className="auth-btn"
                        onClick={handleRegister}
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Creating..." : "Register"}
                    </button>
                </form>

                <p className="auth-switch">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </section>
    );
}
