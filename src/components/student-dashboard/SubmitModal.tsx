import { useDispatch } from "react-redux";
import { fetchAssignments } from "../../redux/assignments/assignmentThunks";
import { submitAssignment } from "../../api/submissionsApi";
import { useState } from "react";

export default function SubmitModal({ assignment, close }: any) {
    const dispatch = useDispatch<any>();
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = async () => {
        if (!file) return;

        const form = new FormData();
        form.append("AssignmentId", assignment.id);
        form.append("File", file);

        await submitAssignment(form);

        close();
        dispatch(fetchAssignments()); // 🔥 auto refresh
    };

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <h3>Submit Assignment</h3>

                <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />

                <div className="modal-actions">
                    <button className="modal-btn cancel" onClick={close}>Cancel</button>
                    <button className="modal-btn submit" onClick={handleSubmit}>Upload</button>
                </div>
            </div>
        </div>
    );
}
