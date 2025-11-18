import AssignmentRow from "./AssignmentRow";

export default function AssignmentTable({ assignments, refresh }: any) {
    return (
        <div className="table-container">
            <table className="assignment-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Teacher</th>
                        <th>Due</th>
                        <th>Status</th>
                        <th>Submit</th>
                    </tr>
                </thead>

                <tbody>
                    {assignments.map((a) => (
                        <AssignmentRow key={a.id} assignment={a} refresh={refresh} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
