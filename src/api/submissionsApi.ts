import api from "./axiosClient";

// Get all submissions belonging to the logged-in student
export const getMySubmissions = () => api.get("/Submissions/mine");

// Submit a new assignment (PDF upload)
export const submitAssignment = (formData: FormData) =>
    api.post("/Submissions", formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });

// (Optional for teacher) Grade submission
export const gradeSubmission = (submissionId: string, grade: number) =>
    api.patch(`/Submissions/${submissionId}/grade`, { grade });

// (Optional for teacher/admin) Get submissions for one assignment
export const getSubmissionsForAssignment = (assignmentId: string) =>
    api.get(`/Submissions/assignment/${assignmentId}`);
