import { useEffect, useState } from "react";
import AssignmentTable from "../components/student-dashboard/AssignmentTable";
import { getAllAssignments } from "../api/assignmentApi";
import { getMySubmissions } from "../api/submissionsApi";

export default function StudentDashboard() {
    const [assignments, setAssignments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const loadData = async () => {
        setLoading(true);

        const [assignRes, subsRes] = await Promise.all([
            getAllAssignments(),
            getMySubmissions(),
        ]);

        const mySubs = subsRes.data;

        const merged = assignRes.data.map((a: any) => {
            const sub = mySubs.find((s: any) => s.assignmentId === a.id);

            return {
                ...a,
                submission: sub
                    ? {
                        status: sub.status,
                        grade: sub.grade,
                        fileUrl: sub.fileUrl
                    }
                    : { status: "Missing", grade: null }
            };
        });

        setAssignments(merged);
        setLoading(false);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <section style={{ padding: "20px" }}>
            <h2>Your Assignments</h2>

            <AssignmentTable
                assignments={assignments}
                refresh={loadData}
            />
        </section>
    );
}
