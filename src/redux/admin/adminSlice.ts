import { createSlice } from "@reduxjs/toolkit";
import {
    fetchUsersThunk,
    assignRoleThunk,
    removeRoleThunk,
    createAdminThunk,
    createTeacherThunk,
    createStudentThunk,
} from "./adminThunks";

interface AdminState {
    users: any[];
    loading: boolean;
    error: string | null;
}

const initialState: AdminState = {
    users: [],
    loading: false,
    error: null,
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //fetch users
        builder.addCase(fetchUsersThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(fetchUsersThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });

        builder.addCase(fetchUsersThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Error loading users";
        });

        //assign role 
        builder.addCase(assignRoleThunk.pending, (state) => {
            state.error = null;
        });

        builder.addCase(assignRoleThunk.fulfilled, (_) => { }); // cleaned

        builder.addCase(assignRoleThunk.rejected, (state, action) => {
            state.error = action.error.message || "Failed to assign role";
        });

        //remove role
        builder.addCase(removeRoleThunk.pending, (state) => {
            state.error = null;
        });

        builder.addCase(removeRoleThunk.fulfilled, (_) => { }); // cleaned

        builder.addCase(removeRoleThunk.rejected, (state, action) => {
            state.error = action.error.message || "Failed to remove role";
        });

        //create user admin/student/teacherr
        builder.addCase(createAdminThunk.rejected, (state, action) => {
            state.error = action.error.message || "Failed to create admin";
        });

        builder.addCase(createTeacherThunk.rejected, (state, action) => {
            state.error = action.error.message || "Failed to create teacher";
        });

        builder.addCase(createStudentThunk.rejected, (state, action) => {
            state.error = action.error.message || "Failed to create student";
        });
    },
});

export default adminSlice.reducer;
