import "./landingHighlights.css";

export default function LandingHighlights() {
    return (
        <div className="landing-highlights">

            <h2 className="lh-title">✨ What You Can Do</h2>
            <p className="lh-subtitle">
                A quick overview of features available in the system.
            </p>

            <div className="lh-lists">

                {/* LEFT LIST */}
                <div className="lh-card">
                    <h3 className="lh-card-title">🔐 Admin Features</h3>
                    <ul>
                        <li>Manage users</li>
                        <li>Create accounts</li>
                        <li>Assign and remove roles</li>
                        <li>Access all system tools</li>
                    </ul>
                </div>

                {/* RIGHT LIST */}
                <div className="lh-card">
                    <h3 className="lh-card-title">📚 Teacher & Student</h3>
                    <ul>
                        <li>View tasks & assignments</li>
                        <li>Upload submissions</li>
                        <li>Review student work</li>
                        <li>Track progress</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
