import { FiAlertTriangle, FiUpload, FiAward } from "react-icons/fi";

interface Props {
    status: "Missing" | "Submitted" | "Graded";
    grade?: number | null;
}

export default function SubmissionStatusBadge({ status, grade }: Props) {
    return (
        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {status === "Missing" && (
                <>
                    <FiAlertTriangle color="#e63946" />
                    <span>Missing</span>
                </>
            )}

            {status === "Submitted" && (
                <>
                    <FiUpload color="#f4a261" />
                    <span>Submitted</span>
                </>
            )}

            {status === "Graded" && (
                <>
                    <FiAward color="#2a9d8f" />
                    <span>Graded ({grade})</span>
                </>
            )}
        </span>
    );
}
