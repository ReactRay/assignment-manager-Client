import "./studentDashboardStyles/assignmentTable.css";
import type { AssignmentResponseDto } from "../../types/assignments";
import AssignmentRow from "./AssignmentRow";

// Icons
import {
    FiBookOpen,
    FiFileText,
    FiUser,
    FiCalendar,
    FiCheckCircle,
    FiUpload
} from "react-icons/fi";

export default function AssignmentTable({ assignments, refresh }: any) {
    return (
        <div className="studentassign-table-wrapper">
            <table className="studentassign-table">
                <thead>
                    <tr>
                        <th><FiBookOpen /> Title</th>
                        <th><FiFileText /> Description</th>
                        <th><FiUser /> Teacher</th>
                        <th><FiCalendar /> Due</th>
                        <th><FiCheckCircle /> Status</th>
                        <th><FiUpload /> Submit</th>
                    </tr>
                </thead>

                <tbody>
                    {assignments.map((a: AssignmentResponseDto) => (
                        <AssignmentRow key={a.id} assignment={a} refresh={refresh} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
