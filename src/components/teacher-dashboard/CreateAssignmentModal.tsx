
import './teachDashboardStyles/createAssignmentModal.css'
import { useState } from "react";
import { useAppDispatch } from "../../redux";
import { createAssignmentThunk } from "../../redux/assignments/teacherAssignmentThunks";

export default function CreateAssignmentModal({ close }: any) {
    const dispatch = useAppDispatch();

    const [form, setForm] = useState({
        title: "",
        description: "",
        dueDate: "",
    });

    const handleSubmit = () => {
        dispatch(createAssignmentThunk(form));
        close();
    };

    return (
        <div className="createassign-overlay">
            <div className="createassign-modal">
                <h3 className="createassign-title">Create Assignment</h3>

                <input
                    className="createassign-input"
                    type="text"
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                />

                <textarea
                    className="createassign-textarea"
                    placeholder="Description"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                />

                <input
                    className="createassign-input"
                    type="date"
                    value={form.dueDate}
                    onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                />

                <div className="createassign-actions">
                    <button className="createassign-btn cancel" onClick={close}>
                        Cancel
                    </button>

                    <button className="createassign-btn submit" onClick={handleSubmit}>
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
}
