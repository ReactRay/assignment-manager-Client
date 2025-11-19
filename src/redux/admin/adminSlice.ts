import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersThunk, assignRoleThunk, removeRoleThunk } from "./adminThunks";

interface AdminState {
    users: any[];
    loading: boolean;
    error: string | null;
}

const initialState: AdminState = {
    users: [],
    loading: false,
    error: null
};

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // ---- FETCH USERS ----
        builder.addCase(fetchUsersThunk.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsersThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchUsersThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Error loading users";
        });

        // ---- ASSIGN ROLE ----
        builder.addCase(assignRoleThunk.fulfilled, () => { });

        // ---- REMOVE ROLE ----
        builder.addCase(removeRoleThunk.fulfilled, () => { });
    }
});

export default adminSlice.reducer;
