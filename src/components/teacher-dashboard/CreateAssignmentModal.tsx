import { useState } from "react";
import { useAppDispatch } from "../../redux/index";
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
        <div className="modal-overlay">
            <div className="modal-box">
                <h3>Create Assignment</h3>

                <input
                    type="text"
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                />

                <textarea
                    placeholder="Description"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                />

                <input
                    type="date"
                    value={form.dueDate}
                    onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                />

                <div className="modal-actions">
                    <button className="modal-btn cancel" onClick={close}>Cancel</button>
                    <button className="modal-btn submit" onClick={handleSubmit}>Create</button>
                </div>
            </div>
        </div>
    );
}
