import api from "./axiosClient";

// get all assignments students or teachers
export const getAllAssignments = () => api.get("/Assignments");

// get one assignment by id
export const getAssignmentById = (id: string) =>
    api.get(`/Assignments/${id}`);

// create assignment , teacher or admin
export const createAssignment = (data: any) =>
    api.post("/Assignments", data);

// update assignment teacher or admin
export const updateAssignment = (id: string, data: any) =>
    api.put(`/Assignments/${id}`, data);

// delete assignment teacher or admin
export const deleteAssignment = (id: string) =>
    api.delete(`/Assignments/${id}`);



