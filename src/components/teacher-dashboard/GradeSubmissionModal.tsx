
import './teachDashboardStyles/gradeSubmissionModal.css'
import { useState } from "react";
import { gradeSubmission } from "../../api/submissionsApi";

export default function GradeSubmissionModal({ submission, close }: any) {
    const [grade, setGrade] = useState(submission.grade ?? "");

    const handleGrade = async () => {
        await gradeSubmission(submission.id, Number(grade));
        close();
    };

    return (
        <div className="gradesub-overlay">
            <div className="gradesub-modal">
                <h3 className="gradesub-title">Grade Submission</h3>

                <input
                    className="gradesub-input"
                    type="number"
                    placeholder="Grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                />

                <div className="gradesub-actions">
                    <button className="gradesub-btn cancel" onClick={close}>
                        Cancel
                    </button>

                    <button className="gradesub-btn submit" onClick={handleGrade}>
                        Save Grade
                    </button>
                </div>
            </div>
        </div>
    );
}
