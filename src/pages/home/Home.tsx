import "./home.css";
import mainImage from "/main3.png";
import FancyButton from "../../components/UI/FancyButton";
import { Link, useNavigate } from "react-router-dom";
import LandingHighlights from "../../components/landingHighlights/LandingHighLights";
import { useSelector } from "react-redux";

export default function Home() {

    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    const handleGetStarted = () => {
        if (!user) {
            navigate("/login");
            return;
        }

        const roles = user.roles || [];

        if (roles.includes("Admin")) {
            navigate("/admin");
        }
        else if (roles.includes("Teacher")) {
            navigate("/teacher");
        }
        else if (roles.includes("Student")) {
            navigate("/student");
        }
        else {
            navigate("/login");
        }
    };


    return (
        <>
            <section className="home-container">
                <div className="home-left">

                    <h1 className="home-title">
                        Student Teacher <br /> Management System
                    </h1>

                    <p className="home-sub">
                        Submit assignments, track progress, communicate with teachers,
                        and stay organized — all in one platform.
                    </p>

                    <div className="home-buttons">
                        <FancyButton text="Get Started" onClick={handleGetStarted} />

                        <Link to="/guide">
                            <FancyButton text="How to use" />
                        </Link>
                    </div>

                </div>

                <div className="home-right">
                    <img src={mainImage} alt="Student Illustration" className="home-image" />
                </div>

            </section>

            <LandingHighlights />


            <div className="guide-video-wrapper">
                <h2 className="guide-heading">🎥 Video Guide</h2>
                <p>Watch the full walkthrough of the system below.</p>
                <video
                    className="guide-video"
                    controls
                    preload="metadata"
                >
                    <source src="https://res.cloudinary.com/danlxus36/video/upload/v1763583961/2025-11-19_22-20-13_c8fwuj.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    );
}
