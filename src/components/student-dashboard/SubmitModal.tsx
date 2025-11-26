import { useDispatch } from "react-redux";
import { fetchAssignments } from "../../redux/assignments/assignmentThunks";
import { submitAssignment } from "../../api/submissionsApi";
import { useState, useRef } from "react";
import "./studentDashboardStyles/submitModal.css";

// Icons
import { FiUploadCloud, FiSend, FiX } from "react-icons/fi";

export default function SubmitModal({ assignment, close }: any) {
    const dispatch = useDispatch<any>();
    const [file, setFile] = useState<File | null>(null);

    // REF to hidden file input
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const triggerFilePicker = () => {
        fileInputRef.current?.click();
    };

    const handleSubmit = async () => {
        if (!file) return;

        const form = new FormData();
        form.append("AssignmentId", assignment.id.toString());
        form.append("File", file);

        await submitAssignment(form);

        close();
        dispatch(fetchAssignments());
    };

    return (
        <div className="submitmodal-overlay">
            <div className="submitmodal-box">
                <h3 className="submitmodal-title">Submit Assignment</h3>

                {/* Hidden File Input */}
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                />

                {/* Custom Upload Box */}
                <div className="submitmodal-uploadbox" onClick={triggerFilePicker}>
                    <FiUploadCloud className="upload-icon" />

                    {!file ? (
                        <p>Click to upload your file</p>
                    ) : (
                        <p className="file-selected">{file.name}</p>
                    )}
                </div>

                <div className="submitmodal-actions">
                    <button className="submitmodal-btn cancel" onClick={close}>
                        <FiX /> Cancel
                    </button>

                    <button
                        className="submitmodal-btn submit"
                        onClick={handleSubmit}
                        disabled={!file}
                    >
                        <FiSend /> Upload
                    </button>
                </div>
            </div>
        </div>
    );
}
