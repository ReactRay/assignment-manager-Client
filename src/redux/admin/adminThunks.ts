import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAllUsers,
    assignRole,
    removeRole,
    createAdmin,
    createTeacher,
    createStudent,
} from "../../api/adminApi";

//fetch users
export const fetchUsersThunk = createAsyncThunk(
    "admin/fetchUsers",
    async () => {
        const res = await getAllUsers();
        return res.data;
    }
);

//assign role to user
export const assignRoleThunk = createAsyncThunk(
    "admin/assignRole",
    async (
        { userId, roleName }: { userId: string; roleName: string },
        { dispatch }
    ) => {
        await assignRole(userId, roleName);

        await dispatch(fetchUsersThunk());
        return true;
    }
);

//remove role from user
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


export const createAdminThunk = createAsyncThunk(
    "admin/createAdmin",
    async (data: any, { dispatch }) => {
        await createAdmin(data);
        await dispatch(fetchUsersThunk());
        return true;
    }
);


export const createTeacherThunk = createAsyncThunk(
    "admin/createTeacher",
    async (data: any, { dispatch }) => {
        await createTeacher(data);
        await dispatch(fetchUsersThunk());
        return true;
    }
);


export const createStudentThunk = createAsyncThunk(
    "admin/createStudent",
    async (data: any, { dispatch }) => {
        await createStudent(data);
        await dispatch(fetchUsersThunk());
        return true;
    }
);
