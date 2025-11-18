

export default function Login() {
    return (
        <section className="auth-container">
            <div className="auth-box">
                <h2>Welcome Back</h2>
                <p className="auth-subtitle">Login to continue</p>

                <form>
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />

                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" />

                    <button type="button" className="auth-btn">Login</button>
                </form>

                <p className="auth-switch">
                    Don't have an account? <a href="/register">Register</a>
                </p>
            </div>
        </section>
    );
}
