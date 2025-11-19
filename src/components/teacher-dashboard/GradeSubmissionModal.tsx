import { useState } from "react";
import { gradeSubmission } from "../../api/submissionsApi";

export default function GradeSubmissionModal({ submission, close }: any) {
    const [grade, setGrade] = useState(submission.grade ?? "");

    const handleGrade = async () => {
        await gradeSubmission(submission.id, { grade: Number(grade) });
        close();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <h3>Grade Submission</h3>

                <input
                    type="number"
                    placeholder="Grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                />

                <div className="modal-actions">
                    <button className="modal-btn cancel" onClick={close}>
                        Cancel
                    </button>

                    <button className="modal-btn submit" onClick={handleGrade}>
                        Save Grade
                    </button>
                </div>
            </div>
        </div>
    );
}
