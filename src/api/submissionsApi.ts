import api from "./axiosClient";

// Get all submissions belonging to the logged-in student
export const getMySubmissions = () => api.get("/Submissions/mine");

// Submit a new assignment (PDF upload)
export const submitAssignment = (formData: FormData) =>
    api.post("/submissions", formData);


// give grade , teacher or admin 
export const gradeSubmission = (submissionId: string, grade: number) =>
    api.put(`/Submissions/${submissionId}/grade`, { grade });


// get submissions for one assignment , use assignment id here 
export const getSubmissionsForAssignment = (assignmentId: string) =>
    api.get(`/Submissions/assignment/${assignmentId}`);
