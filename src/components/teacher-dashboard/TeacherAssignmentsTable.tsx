import TeacherAssignmentRow from "./TeacherAssignmentRow";

export default function TeacherAssignmentsTable({ assignments }: any) {
    return (
        <table className="assignment-table">
            <thead>
                <tr>
                    <th>Title</th>
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
    );
}
