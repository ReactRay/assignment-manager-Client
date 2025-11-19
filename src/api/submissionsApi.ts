import api from "./axiosClient";

// Get all submissions belonging to the logged-in student
export const getMySubmissions = () => api.get("/Submissions/mine");

// Submit a new assignment (PDF upload)
export const submitAssignment = (formData: FormData) =>
    api.post("/submissions", formData);


// (Optional for teacher) Grade submission
export const gradeSubmission = (submissionId: string, grade: number) =>
    api.put(`/Submissions/${submissionId}/grade`, { grade });


// (Optional for teacher/admin) Get submissions for one assignment
export const getSubmissionsForAssignment = (assignmentId: string) =>
    api.get(`/Submissions/assignment/${assignmentId}`);
