import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/index";
import { fetchTeacherAssignments } from "../redux/assignments/teacherAssignmentThunks";
import TeacherAssignmentsTable from "../components/teacher-dashboard/TeacherAssignmentsTable";

import CreateAssignmentModal from "../components/teacher-dashboard/CreateAssignmentModal";

export default function TeacherDashboard() {
    const dispatch = useAppDispatch();
    const { list, loading } = useAppSelector((s) => s.teacherAssignments);
    const [openCreate, setOpenCreate] = useState(false);

    useEffect(() => {
        dispatch(fetchTeacherAssignments());
    }, [dispatch]);

    return (
        <section style={{ padding: "20px" }}>
            <h2>Your Assignments</h2>

            <button
                className="btn-primary"
                style={{ marginBottom: "15px" }}
                onClick={() => setOpenCreate(true)}
            >
                + Create Assignment
            </button>

            {loading && <p>Loading...</p>}

            {!loading && <TeacherAssignmentsTable assignments={list} />}

            {openCreate && (
                <CreateAssignmentModal close={() => setOpenCreate(false)} />
            )}
        </section>
    );
}
