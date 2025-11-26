import './fancybutton.css'
import { FiArrowRight } from "react-icons/fi";

interface FancyButtonProps {
    text: string;
    onClick?: () => void;
    color: string;
}

export default function FancyButton({ color, text, onClick }: FancyButtonProps) {
    return (
        <button className={`fancy-btn ${color}`} onClick={onClick}>
            <span>{text}</span>
            <FiArrowRight className="arrow-icon" />
        </button>
    );
}
