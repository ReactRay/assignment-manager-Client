

export default function Register() {
    return (
        <section className="auth-container">
            <div className="auth-box">
                <h2>Create Account</h2>
                <p className="auth-subtitle">Join our platform</p>

                <form>
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" />

                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />

                    <label>Password</label>
                    <input type="password" placeholder="Create a password" />

                    <button type="button" className="auth-btn">Register</button>
                </form>

                <p className="auth-switch">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </section>
    );
}
