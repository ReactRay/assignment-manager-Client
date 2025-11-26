import "./landingHighlights.css";
import {
    FiUsers,
    FiUserCheck,
    FiKey,
    FiTool,
    FiBook,
    FiUpload,
    FiCheckCircle,
    FiBarChart2
} from "react-icons/fi";

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
                    <h3 className="lh-card-title"><FiKey /> Admin Features</h3>
                    <ul>
                        <li><FiUsers /> Manage users</li>
                        <li><FiUserCheck /> Create accounts</li>
                        <li><FiKey /> Assign and remove roles</li>
                        <li><FiTool /> Access all system tools</li>
                    </ul>
                </div>

                {/* RIGHT LIST */}
                <div className="lh-card">
                    <h3 className="lh-card-title"><FiBook /> Teacher & Student</h3>
                    <ul>
                        <li><FiBook /> View tasks & assignments</li>
                        <li><FiUpload /> Upload submissions</li>
                        <li><FiCheckCircle /> Review student work</li>
                        <li><FiBarChart2 /> Track progress</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}
