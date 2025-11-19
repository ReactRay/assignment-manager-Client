import { useEffect, useState } from "react";
import { getSubmissionsForAssignment } from "../../api/submissionsApi";
import GradeSubmissionModal from "./GradeSubmissionModal";
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
            a.download = "submission.pdf"; // OR dynamic filename
            a.click();
        } catch (err) {
            console.error("Download failed", err);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <h3>Submissions for: {title}</h3>

                <table className="assignment-table">
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>Submitted At</th>
                            <th>Grade</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {submissions.map((s: any) => (
                            <tr key={s.id}>
                                <td>{s.studentName}</td>
                                <td>{new Date(s.submittedAt).toLocaleString()}</td>
                                <td>{s.grade ?? "—"}</td>

                                <td style={{ display: "flex", gap: "8px" }}>
                                    <button
                                        className="btn-secondary"
                                        onClick={() => handleDownload(s.id)}
                                    >
                                        Download
                                    </button>


                                    <button
                                        className="btn-primary"
                                        onClick={() => setOpenGrade(s)}
                                    >
                                        Grade
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="modal-actions">
                    <button className="modal-btn cancel" onClick={close}>
                        Close
                    </button>
                </div>

                {openGrade && (
                    <GradeSubmissionModal
                        submission={openGrade}
                        close={() => {
                            setOpenGrade(null);
                            load(); // refresh grades
                        }}
                    />
                )}
            </div>
        </div>
    );
}
