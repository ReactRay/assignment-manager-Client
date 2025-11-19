import api from "./axiosClient";

export const getAllUsers = () => api.get("/Admin/users");

export const assignRole = (userId: string, roleName: string) =>
    api.post(`/Admin/users/${userId}/roles/${roleName}`);

export const removeRole = (userId: string, roleName: string) =>
    api.delete(`/Admin/users/${userId}/roles/${roleName}`);

export const createAdmin = (data: any) =>
    api.post("/Admin/create-admin", data);

export const createTeacher = (data: any) =>
    api.post("/Admin/create-teacher", data);

export const createStudent = (data: any) =>
    api.post("/Admin/create-student", data);
