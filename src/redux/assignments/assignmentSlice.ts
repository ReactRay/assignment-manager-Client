import { createSlice } from "@reduxjs/toolkit";
import { fetchAssignments } from "./assignmentThunks";

interface AssignmentsState {
    list: any[];
    loading: boolean;
}

const initialState: AssignmentsState = {
    list: [],
    loading: false,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAssignments.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAssignments.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(fetchAssignments.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default assignmentsSlice.reducer;
