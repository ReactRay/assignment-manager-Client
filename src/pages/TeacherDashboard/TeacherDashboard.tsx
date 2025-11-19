import "./teacherDashboard.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/index";
import { fetchTeacherAssignments } from "../../redux/assignments/teacherAssignmentThunks";
import TeacherAssignmentsTable from "../../components/teacher-dashboard/TeacherAssignmentsTable";
import CreateAssignmentModal from "../../components/teacher-dashboard/CreateAssignmentModal";

export default function TeacherDashboard() {
    const dispatch = useAppDispatch();
    const { list, loading } = useAppSelector((s) => s.teacherAssignments);
    const [openCreate, setOpenCreate] = useState(false);

    useEffect(() => {
        dispatch(fetchTeacherAssignments());
    }, [dispatch]);

    return (
        <section className="teacher-dashboard">
            <h2 className="teacher-dashboard__title">Teachers Dashboard</h2>

            <button
                className="teacher-dashboard__create-btn"
                onClick={() => setOpenCreate(true)}
            >
                + Create Assignment
            </button>

            {loading && <p className="teacher-dashboard__loading">Loading...</p>}

            {!loading && <TeacherAssignmentsTable assignments={list} />}

            {openCreate && (
                <CreateAssignmentModal close={() => setOpenCreate(false)} />
            )}
        </section>
    );
}
