import "./../Styles/components/footer.css";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <h3 className="footer-title">Student Teacher Management</h3>

                <p className="footer-sub">
                    Please enjoy your stay!
                </p>

                {/* Social Icons */}
                <div className="footer-links">
                    <a href="https://github.com/ReactRay" target="_blank">
                        <FaGithub />
                    </a>

                    <a href="https://www.linkedin.com/in/radwan-mansur-1368b7232/" target="_blank">
                        <FaLinkedin />
                    </a>

                    <a href="https://www.radwan-mansur.com" target="_blank">
                        <FaGlobe />
                    </a>
                </div>

                <p className="footer-copy">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
}
