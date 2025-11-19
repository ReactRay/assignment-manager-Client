import { useDispatch } from "react-redux";
import { fetchAssignments } from "../../redux/assignments/assignmentThunks";
import { submitAssignment } from "../../api/submissionsApi";
import { useState } from "react";
import "./studentDashboardStyles/submitModal.css";

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
        dispatch(fetchAssignments());
    };

    return (
        <div className="submitmodal-overlay">
            <div className="submitmodal-box">
                <h3 className="submitmodal-title">Submit Assignment</h3>

                <input
                    className="submitmodal-file"
                    type="file"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                />

                <div className="submitmodal-actions">
                    <button className="submitmodal-btn cancel" onClick={close}>
                        Cancel
                    </button>

                    <button className="submitmodal-btn submit" onClick={handleSubmit}>
                        Upload
                    </button>
                </div>
            </div>
        </div>
    );
}
