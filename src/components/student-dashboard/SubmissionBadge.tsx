import "./studentDashboardStyles/submissionBadge.css";
import { FiAlertTriangle, FiUpload, FiAward } from "react-icons/fi";

interface Props {
    status: "Missing" | "Submitted" | "Graded";
    grade?: number | null;
}

export default function SubmissionStatusBadge({ status, grade }: Props) {
    return (
        <span
            className={
                "submission-badge " +
                (status === "Missing"
                    ? "submission-badge--missing"
                    : status === "Submitted"
                        ? "submission-badge--submitted"
                        : "submission-badge--graded")
            }
        >
            {status === "Missing" && (
                <>
                    <FiAlertTriangle />
                    <span>Missing</span>
                </>
            )}

            {status === "Submitted" && (
                <>
                    <FiUpload />
                    <span>Submitted</span>
                </>
            )}

            {status === "Graded" && (
                <>
                    <FiAward />
                    <span>Graded ({grade})</span>
                </>
            )}
        </span>
    );
}
