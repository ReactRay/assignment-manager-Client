import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssignments } from "../redux/assignments/assignmentThunks";
import AssignmentTable from "../components/student-dashboard/AssignmentTable";

export default function StudentDashboard() {
    const dispatch = useDispatch<any>();
    const { list, loading } = useSelector((s: any) => s.assignments);

    useEffect(() => {
        dispatch(fetchAssignments());
    }, []);

    return (
        <section style={{ padding: "20px" }}>
            <h2>Your Assignments</h2>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <AssignmentTable assignments={list} />
            )}
        </section>
    );
}
