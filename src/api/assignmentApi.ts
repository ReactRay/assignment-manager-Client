import api from "./axiosClient";

// Get ALL assignments (Student or Teacher)
export const getAssignments = () => api.get("/Assignments");

// Get ONE assignment by ID (for later)
export const getAssignmentById = (id: string) =>
    api.get(`/Assignments/${id}`);

// (Teacher only) Create assignment
export const createAssignment = (data: any) =>
    api.post("/Assignments", data);

// (Teacher only) Update assignment
export const updateAssignment = (id: string, data: any) =>
    api.put(`/Assignments/${id}`, data);

// (Teacher only) Delete assignment
export const deleteAssignment = (id: string) =>
    api.delete(`/Assignments/${id}`);
