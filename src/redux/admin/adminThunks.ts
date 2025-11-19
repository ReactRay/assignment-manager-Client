import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAllUsers,
    assignRole,
    removeRole,
    createAdmin,
    createTeacher,
    createStudent
} from "../../api/adminApi";


export const fetchUsersThunk = createAsyncThunk(
    "admin/fetchUsers",
    async () => {
        const res = await getAllUsers();
        return res.data;
    }
);


export const assignRoleThunk = createAsyncThunk(
    "admin/assignRole",
    async ({ userId, roleName }: { userId: string; roleName: string }) => {
        await assignRole(userId, roleName);
        return true;
    }
);


export const removeRoleThunk = createAsyncThunk(
    "admin/removeRole",
    async ({ userId, roleName }: { userId: string; roleName: string }) => {
        await removeRole(userId, roleName);
        return true;
    }
);



export const createAdminThunk = createAsyncThunk(
    "admin/createAdmin",
    async (data: any) => {
        await createAdmin(data);
        return true;
    }
);

export const createTeacherThunk = createAsyncThunk(
    "admin/createTeacher",
    async (data: any) => {
        await createTeacher(data);
        return true;
    }
);

export const createStudentThunk = createAsyncThunk(
    "admin/createStudent",
    async (data: any) => {
        await createStudent(data);
        return true;
    }
);
