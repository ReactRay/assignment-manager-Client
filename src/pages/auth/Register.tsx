import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/authThunks";
import { type RootState } from "../../redux";
import type { RegisterDto } from "../../types/auth";

// Icons
import { FiMail, FiLock, FiUser, FiUserPlus } from "react-icons/fi";

export default function Register() {
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const { status, error } = useSelector((state: RootState) => state.auth);

    const [form, setForm] = useState<RegisterDto>({
        fullName: "",
        email: "",
        password: "",
        role: "Student",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await dispatch(registerThunk(form)).unwrap();
            navigate("/login");
        } catch (_) { }
    };

    return (
        <section className="auth-container">
            <div className="auth-box">
                <h2>Create Account</h2>
                <p className="auth-subtitle">Join our platform</p>

                {status === "failed" && (
                    <p className="auth-error">{error || "Registration failed"}</p>
                )}

                <form onSubmit={handleSubmit}>

                    <label>Full Name</label>
                    <div className="input-wrapper">
                        <FiUser />
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={form.fullName}
                            onChange={handleChange}
                        />
                    </div>

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
                            placeholder="Create a password"
                            value={form.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        className="auth-btn"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Creating..." : (
                            <>
                                <FiUserPlus /> Register
                            </>
                        )}
                    </button>
                </form>

                <p className="auth-switch">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </section>
    );
}
