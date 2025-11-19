import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAllAssignments,
    createAssignment,
    updateAssignment,
    deleteAssignment
} from "../../api/assignmentApi";
import { getSubmissionsForAssignment } from "../../api/submissionsApi";

// FETCH TEACHER'S OWN ASSIGNMENTS
export const fetchTeacherAssignments = createAsyncThunk(
    "teacherAssignments/fetch",
    async () => {
        const res = await getAllAssignments();
        return res.data;
    }
);

// FETCH SUBMISSIONS FOR A SPECIFIC ASSIGNMENT
export const fetchSubmissionsForAssignment = createAsyncThunk(
    "teacherAssignments/fetchSubmissions",
    async (assignmentId: string) => {
        const res = await getSubmissionsForAssignment(assignmentId);
        return { assignmentId, submissions: res.data };
    }
);

// CREATE ASSIGNMENT
export const createAssignmentThunk = createAsyncThunk(
    "teacherAssignments/create",
    async (payload: any) => {
        const res = await createAssignment(payload);
        return res.data;
    }
);

// UPDATE ASSIGNMENT
export const updateAssignmentThunk = createAsyncThunk(
    "teacherAssignments/update",
    async ({ id, data }: any) => {
        const res = await updateAssignment(id, data);
        return res.data;
    }
);

// DELETE ASSIGNMENT
export const deleteAssignmentThunk = createAsyncThunk(
    "teacherAssignments/delete",
    async (id: string) => {
        await deleteAssignment(id);
        return id;
    }
);
