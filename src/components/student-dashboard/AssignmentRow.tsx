import { useState } from "react";
import SubmissionStatusBadge from "./SubmissionBadge";
import SubmitModal from "./SubmitModal";

export default function AssignmentRow({ assignment, refresh }: any) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <tr>
                <td>{assignment.title}</td>
                <td>{assignment.teacherName}</td>
                <td>{new Date(assignment.dueDate).toLocaleDateString()}</td>

                <td>
                    <SubmissionStatusBadge
                        status={assignment.submission.status}
                        grade={assignment.submission.grade}
                    />
                </td>

                <td>
                    <button className="submit-btn" onClick={() => setOpen(true)}>
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
