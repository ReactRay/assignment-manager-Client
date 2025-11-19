import "./studentDashboard.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssignments } from "../../redux/assignments/assignmentThunks";
import AssignmentTable from "../../components/student-dashboard/AssignmentTable";

export default function StudentDashboard() {
    const dispatch = useDispatch<any>();
    const { list, loading } = useSelector((s: any) => s.assignments);

    useEffect(() => {
        dispatch(fetchAssignments());
    }, []);

    return (
        <section className="student-dashboard">
            <h2 className="student-dashboard__title">Student Dashboard</h2>

            {loading ? (
                <p className="student-dashboard__loading">Loading...</p>
            ) : (
                <div className="student-dashboard__table-wrapper">
                    <AssignmentTable assignments={list} />
                </div>
            )}
        </section>
    );
}
