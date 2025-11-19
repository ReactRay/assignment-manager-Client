// src/redux/admin/adminThunks.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAllUsers,
    assignRole,
    removeRole,
    createAdmin,
    createTeacher,
    createStudent,
} from "../../api/adminApi";

// ---- FETCH ALL USERS ----
export const fetchUsersThunk = createAsyncThunk(
    "admin/fetchUsers",
    async () => {
        const res = await getAllUsers();
        return res.data;
    }
);

// ---- ASSIGN ROLE TO USER ----
export const assignRoleThunk = createAsyncThunk(
    "admin/assignRole",
    async (
        { userId, roleName }: { userId: string; roleName: string },
        { dispatch }
    ) => {
        await assignRole(userId, roleName);
        // Refresh users so UI updates
        await dispatch(fetchUsersThunk());
        return true;
    }
);

// ---- REMOVE ROLE FROM USER ----
export const removeRoleThunk = createAsyncThunk(
    "admin/removeRole",
    async (
        { userId, roleName }: { userId: string; roleName: string },
        { dispatch }
    ) => {
        await removeRole(userId, roleName);
        // Refresh users so UI updates
        await dispatch(fetchUsersThunk());
        return true;
    }
);

// ---- CREATE ADMIN ----
export const createAdminThunk = createAsyncThunk(
    "admin/createAdmin",
    async (data: any, { dispatch }) => {
        await createAdmin(data);
        await dispatch(fetchUsersThunk());
        return true;
    }
);

// ---- CREATE TEACHER ----
export const createTeacherThunk = createAsyncThunk(
    "admin/createTeacher",
    async (data: any, { dispatch }) => {
        await createTeacher(data);
        await dispatch(fetchUsersThunk());
        return true;
    }
);

// ---- CREATE STUDENT ----
export const createStudentThunk = createAsyncThunk(
    "admin/createStudent",
    async (data: any, { dispatch }) => {
        await createStudent(data);
        await dispatch(fetchUsersThunk());
        return true;
    }
);
