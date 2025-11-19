import { useState } from "react";
import { useAppDispatch } from "../../redux/index";
import { updateAssignmentThunk } from "../../redux/assignments/teacherAssignmentThunks";

export default function EditAssignmentModal({ assignment, close }: any) {
    const dispatch = useAppDispatch();

    const [form, setForm] = useState({
        title: assignment.title,
        description: assignment.description,
        dueDate: assignment.dueDate.split("T")[0], // yyyy-mm-dd
    });

    const handleSave = () => {
        dispatch(updateAssignmentThunk({ id: assignment.id, data: form }));
        close();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <h3>Edit Assignment</h3>

                <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                />

                <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                />

                <input
                    type="date"
                    value={form.dueDate}
                    onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                />

                <div className="modal-actions">
                    <button className="modal-btn cancel" onClick={close}>
                        Cancel
                    </button>
                    <button className="modal-btn submit" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
