import { useState } from "react";
import SubmissionStatusBadge from "./SubmissionBadge";
import SubmitModal from "./SubmitModal";
import './studentDashboardStyles/assignmentRow.css';

export default function AssignmentRow({ assignment, refresh }: any) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <tr className="studentassign-row">
                <td className="studentassign-title">
                    {assignment.title}
                </td>

                <td className="studentassign-desc">
                    {assignment.description}
                </td>

                <td className="studentassign-teacher">
                    {assignment.teacherName}
                </td>

                <td className="studentassign-date">
                    {new Date(assignment.dueDate).toLocaleDateString()}
                </td>

                <td className="studentassign-status">
                    <SubmissionStatusBadge
                        status={assignment.submission.status}
                        grade={assignment.submission.grade}
                    />
                </td>

                <td className="studentassign-submit-cell">
                    <button
                        className="studentassign-submit-btn"
                        onClick={() => setOpen(true)}
                    >
                        Submit
                    </button>
                </td>
            </tr>

            {open && (
                <SubmitModal
                    assignment={assignment}
                    close={() => setOpen(false)}
                    refresh={refresh}
                />
            )}
        </>
    );
}
