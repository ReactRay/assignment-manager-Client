import { useEffect, useState } from "react";
import AssignmentList from "../components/student-dashboard/AssignmentList";
import { getAssignments } from "../api/assignmentApi";
import { getMySubmissions } from "../api/submissionsApi";

export default function StudentDashboard() {
    const [assignments, setAssignments] = useState<any[]>([]);
    const [mySubmissions, setMySubmissions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                const [assignRes, subRes] = await Promise.all([
                    getAssignments(),
                    getMySubmissions(),
                ]);

                setAssignments(assignRes.data);
                setMySubmissions(subRes.data);

            } catch (err) {
                console.error("Failed to load student dashboard:", err);
            } finally {
                setLoading(false);
            }
        };

        load();
    }, []);

    if (loading) return <p>Loading...</p>;

    const mergedData = assignments.map((a) => {
        const sub = mySubmissions.find((s) => s.assignmentId === a.id);

        return {
            ...a,
            submission: sub
                ? {
                    status: sub.status,
                    grade: sub.grade,
                    submittedAt: sub.submittedAt,
                }
                : {
                    status: "Missing",
                    grade: null,
                    submittedAt: null,
                },
        };
    });

    return (
        <section style={{ padding: "20px" }}>
            <h2>Your Assignments</h2>
            <AssignmentList assignments={mergedData} />
        </section>
    );
}
