interface Props {
    status: "Missing" | "Submitted" | "Graded";
    grade?: number | null;
}

export default function SubmissionStatusBadge({ status, grade }: Props) {
    return (
        <span>
            {status === "Missing" && "❗ Missing"}
            {status === "Submitted" && "📤 Submitted"}
            {status === "Graded" && `🏆 Graded (${grade})`}
        </span>
    );
}
