import './teachDashboardStyles/teacherAssignmentTable.css';
import TeacherAssignmentRow from "./TeacherAssignmentRow";

// Icons
import { FiBookOpen, FiFileText, FiCalendar, FiSettings } from "react-icons/fi";

export default function TeacherAssignmentsTable({ assignments }: any) {
    return (
        <div className="teacherassign-table-wrapper">
            <table className="teacherassign-table">
                <thead>
                    <tr>
                        <th><FiBookOpen /> Title</th>
                        <th><FiFileText /> Description</th>
                        <th><FiCalendar /> Due Date</th>
                        <th><FiSettings /> Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {assignments.map((a: any) => (
                        <TeacherAssignmentRow key={a.id} assignment={a} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
