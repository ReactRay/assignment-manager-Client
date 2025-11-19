import './teachDashboardStyles/viewSubmissionModal.css'

import GradeSubmissionModal from './GradeSubmissionModal';
import { useEffect, useState } from "react";
import { getSubmissionsForAssignment } from "../../api/submissionsApi";
import api from "../../api/axiosClient";

export default function ViewSubmissionsModal({ assignmentId, title, close }: any) {
    const [submissions, setSubmissions] = useState([]);
    const [openGrade, setOpenGrade] = useState<any>(null);

    const load = async () => {
        const res = await getSubmissionsForAssignment(assignmentId);
        setSubmissions(res.data);
    };

    useEffect(() => {
        load();
    }, []);

    const handleDownload = async (submissionId: string) => {
        try {
            const res = await api.get(`/Submissions/${submissionId}/download`, {
                responseType: "blob",
            });

            const blob = new Blob([res.data]);
            const url = window.URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "submission.pdf";
            a.click();
        } catch (err) {
            console.error("Download failed", err);
        }
    };

    return (
        <div className="viewsubs-overlay">
            <div className="viewsubs-modal">
                <h3 className="viewsubs-title">Submissions for: {title}</h3>

                <table className="viewsubs-table">
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>Submitted At</th>
                            <th>Grade</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {submissions.length === 0 && (
                            <tr>
                                <td colSpan={4}>No submissions yet...</td>
                            </tr>
                        )}
                        {submissions.map((s: any) => (
                            <tr key={s.id}>
                                <td>{s.studentName}</td>
                                <td>{new Date(s.submittedAt).toLocaleString()}</td>
                                <td>{s.grade ?? "—"}</td>

                                <td>
                                    <div className="viewsubs-actions">
                                        <button
                                            className="viewsubs-btn-secondary"
                                            onClick={() => handleDownload(s.id)}
                                        >
                                            Download
                                        </button>

                                        <button
                                            className="viewsubs-btn-primary"
                                            onClick={() => setOpenGrade(s)}
                                        >
                                            Grade
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="viewsubs-footer">
                    <button className="viewsubs-btn-cancel" onClick={close}>
                        Close
                    </button>
                </div>

                {openGrade && (
                    <GradeSubmissionModal
                        submission={openGrade}
                        close={() => {
                            setOpenGrade(null);
                            load();
                        }}
                    />
                )}
            </div>
        </div>
    );
}
