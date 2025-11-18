import { submitAssignment } from "../../api/submissionsApi";
import { useState } from "react";

export default function SubmitModal({ assignment, close, refresh }: any) {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        if (!file) {
            setError("Please select a file.");
            return;
        }

        const form = new FormData();
        form.append("AssignmentId", assignment.id);
        form.append("File", file);

        try {
            await submitAssignment(form);
            close();
            refresh();
        } catch {
            setError("Upload failed.");
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <h3>Submit Assignment</h3>

                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                />

                {error && <p className="modal-error">{error}</p>}

                <div className="modal-actions">
                    <button className="modal-btn cancel" onClick={close}>
                        Cancel
                    </button>

                    <button className="modal-btn submit" onClick={handleSubmit}>
                        Upload
                    </button>
                </div>
            </div>
        </div>
    );
}
