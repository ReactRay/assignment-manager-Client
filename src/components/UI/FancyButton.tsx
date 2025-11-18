import { FiArrowRight } from "react-icons/fi";
import "../../Styles/components/FancyButton.css";
interface FancyButtonProps {
    text: string;
    onClick?: () => void;
}

export default function FancyButton({ text, onClick }: FancyButtonProps) {
    return (
        <button className="fancy-btn" onClick={onClick}>
            <span>{text}</span>
            <FiArrowRight className="arrow-icon" />
        </button>
    );
}
