import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type AuthState } from "./authTypes";
import { loginThunk, registerThunk } from "./authThunks";
import { type UserDto } from "../../types/auth";

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
    status: "idle",
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },

        loadUserFromStorage(state) {
            const token = localStorage.getItem("token");
            const user = localStorage.getItem("user");

            if (token && user) {
                state.token = token;
                state.user = JSON.parse(user) as UserDto;
                state.isAuthenticated = true;
            }
        },
    },

    extraReducers: (builder) => {
        // LOGIN
        builder.addCase(loginThunk.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.isAuthenticated = true;


            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
        });
        builder.addCase(loginThunk.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message ?? "Login failed";
        });

        // REGISTER
        builder.addCase(registerThunk.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(registerThunk.fulfilled, (state) => {
            state.status = "succeeded";
        });
        builder.addCase(registerThunk.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message ?? "Register failed";
        });
    },
});

export const { logout, loadUserFromStorage } = authSlice.actions;

export default authSlice.reducer;
