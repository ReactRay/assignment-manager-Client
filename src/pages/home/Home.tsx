import "./home.css";
import mainImage from "/main3.png";
import FancyButton from "../../components/UI/FancyButton";

export default function Home() {
    return (
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
                    <FancyButton text="Read more" />
                    <FancyButton text="Get Started" />
                </div>
            </div>

            <div className="home-right">
                <img src={mainImage} alt="Student Illustration" className="home-image" />
            </div>
        </section>
    );
}
