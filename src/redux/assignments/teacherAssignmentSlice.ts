import { createSlice } from "@reduxjs/toolkit";
import {
    fetchTeacherAssignments,
    fetchSubmissionsForAssignment,
    createAssignmentThunk,
    updateAssignmentThunk,
    deleteAssignmentThunk
} from "./teacherAssignmentThunks";

interface TeacherAssignmentsState {
    list: any[];
    submissions: Record<string, any[]>;
    loading: boolean;
}

const initialState: TeacherAssignmentsState = {
    list: [],
    submissions: {},
    loading: false,
};

const teacherAssignmentsSlice = createSlice({
    name: "teacherAssignments",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            // FETCH ASSIGNMENTS
            .addCase(fetchTeacherAssignments.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTeacherAssignments.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(fetchTeacherAssignments.rejected, (state) => {
                state.loading = false;
            })

            // FETCH SUBMISSIONS FOR ONE ASSIGNMENT
            .addCase(fetchSubmissionsForAssignment.fulfilled, (state, action) => {
                const { assignmentId, submissions } = action.payload;
                state.submissions[assignmentId] = submissions;
            })

            // CREATE ASSIGNMENT
            .addCase(createAssignmentThunk.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })

            // UPDATE ASSIGNMENT
            .addCase(updateAssignmentThunk.fulfilled, (state, action) => {
                state.list = state.list.map((a) =>
                    a.id === action.payload.id ? action.payload : a
                );
            })

            // DELETE ASSIGNMENT
            .addCase(deleteAssignmentThunk.fulfilled, (state, action) => {
                state.list = state.list.filter((a) => a.id !== action.payload);
            });
    },
});

export default teacherAssignmentsSlice.reducer;
