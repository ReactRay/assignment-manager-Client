import './teachDashboardStyles/teacherAssignmentTable.css';
import TeacherAssignmentRow from "./TeacherAssignmentRow";

export default function TeacherAssignmentsTable({ assignments }: any) {
    return (
        <div className="teacherassign-table-wrapper">
            <table className="teacherassign-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Actions</th>
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
