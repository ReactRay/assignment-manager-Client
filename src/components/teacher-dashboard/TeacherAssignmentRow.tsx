import './teachDashboardStyles/teacherAssignmentRow.css'
import { useState } from "react";
import EditAssignmentModal from "./EditAssigmentModal";
import ViewSubmissionsModal from "./ViewSubmissionModal";
import { useAppDispatch } from "../../redux";
import { deleteAssignmentThunk } from "../../redux/assignments/teacherAssignmentThunks";

export default function TeacherAssignmentRow({ assignment }: any) {
    const dispatch = useAppDispatch();
    const [openEdit, setOpenEdit] = useState(false);
    const [openSubs, setOpenSubs] = useState(false);

    const handleDelete = () => {
        if (confirm("Delete this assignment?")) {
            dispatch(deleteAssignmentThunk(assignment.id));
        }
    };

    return (
        <>
            <tr>
                <td>{assignment.title}</td>

                <td className="teacherassign-desc-cell">
                    {assignment.description}
                </td>

                <td>{new Date(assignment.dueDate).toLocaleDateString()}</td>

                <td>
                    <div className="teacherassign-row-actions">
                        <button className="teacherassign-btn-secondary" onClick={() => setOpenSubs(true)}>
                            View Submissions
                        </button>

                        <button className="teacherassign-btn-primary" onClick={() => setOpenEdit(true)}>
                            Edit
                        </button>

                        <button className="teacherassign-btn-danger" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </td>
            </tr>

            {openEdit && (
                <EditAssignmentModal
                    assignment={assignment}
                    close={() => setOpenEdit(false)}
                />
            )}

            {openSubs && (
                <ViewSubmissionsModal
                    assignmentId={assignment.id}
                    title={assignment.title}
                    close={() => setOpenSubs(false)}
                />
            )}
        </>
    );
}
