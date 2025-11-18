import { mockAssignments as assignments } from "../utils/mock";

export default function StudentDashboard() {
    return (
        <div className="student-dashboard">
            <h1>Your Assignments</h1>

            <div className="table-container">
                <table className="student-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Teacher</th>
                            <th>Due Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {assignments.map(a => (
                            <tr key={a.id}>
                                <td>{a.title}</td>
                                <td>{a.teacherName}</td>
                                <td>{new Date(a.dueDate).toLocaleDateString()}</td>
                                <td>
                                    <span
                                        className={
                                            a.status === "Submitted"
                                                ? "status-tag status-submitted"
                                                : "status-tag status-pending"
                                        }
                                    >
                                        {a.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
