import SubmissionStatusBadge from "./SubmissionBadge";

interface Props {
    assignment: any;
}

export default function AssignmentCard({ assignment }: Props) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", marginBottom: "12px" }}>
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>

            <p><strong>Teacher:</strong> {assignment.teacherName}</p>
            <p><strong>Due:</strong> {new Date(assignment.dueDate).toLocaleDateString()}</p>

            <SubmissionStatusBadge status={assignment.submission.status} grade={assignment.submission.grade} />

            <button style={{ marginTop: "10px" }}>Submit</button>
        </div>
    );
}
