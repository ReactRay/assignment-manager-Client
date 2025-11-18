import { useState } from "react";
import SubmissionStatusBadge from "./SubmissionBadge";
import SubmitModal from "./SubmitModal";
export default function AssignmentRow({ assignment }: any) {
    const submission = assignment.submission;

    const [open, setOpen] = useState(false);

    return (
        <>
            <tr>
                <td data-label="Title">{assignment.title}</td>

                <td data-label="Teacher">{assignment.teacherName}</td>

                <td data-label="Due Date">
                    {new Date(assignment.dueDate).toLocaleDateString()}
                </td>

                <td data-label="Status">
                    <SubmissionStatusBadge
                        status={submission.status}
                        grade={submission.grade}
                    />
                </td>

                <td data-label="Grade">
                    {submission.grade ?? "-"}
                </td>

                <td data-label="Action">
                    <button
                        className="submit-btn"
                        onClick={() => setOpen(true)}
                    >
                        {submission.status === "Missing" ? "Submit" : "Update"}
                    </button>
                </td>
            </tr>

            {open && (
                <SubmitModal
                    assignment={assignment}
                    close={() => setOpen(false)}
                />
            )}
        </>
    );
}
