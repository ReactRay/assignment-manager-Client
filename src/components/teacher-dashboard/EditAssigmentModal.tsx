
import './teachDashboardStyles/editAssignmentModal.css'
import { useState } from "react";
import { useAppDispatch } from "../../redux/index";
import { updateAssignmentThunk } from "../../redux/assignments/teacherAssignmentThunks";

export default function EditAssignmentModal({ assignment, close }: any) {
    const dispatch = useAppDispatch();

    const [form, setForm] = useState({
        title: assignment.title,
        description: assignment.description,
        dueDate: assignment.dueDate.split("T")[0],
    });

    const handleSave = () => {
        dispatch(updateAssignmentThunk({ id: assignment.id, data: form }));
        close();
    };

    return (
        <div className="editassign-overlay">
            <div className="editassign-modal">
                <h3 className="editassign-title">Edit Assignment</h3>

                <input
                    className="editassign-input"
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="Assignment Title"
                />

                <textarea
                    className="editassign-textarea"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Description"
                />

                <input
                    className="editassign-input"
                    type="date"
                    value={form.dueDate}
                    onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                />

                <div className="editassign-actions">
                    <button className="editassign-btn cancel" onClick={close}>
                        Cancel
                    </button>

                    <button className="editassign-btn submit" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
