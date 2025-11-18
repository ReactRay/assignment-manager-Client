import AssignmentRow from "./AssignmentRow";

interface Props {
    assignments: any[];
}

export default function AssignmentTable({ assignments }: Props) {
    return (
        <table className="assignment-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Teacher</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Grade</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {assignments.map((a) => (
                    <AssignmentRow key={a.id} assignment={a} />
                ))}
            </tbody>
        </table>
    );
}
