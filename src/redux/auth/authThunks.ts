import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../api/authApi";
import { type LoginDto, type RegisterDto, type LoginResponse } from "../../types/auth";

// LOGIN THUNK
export const loginThunk = createAsyncThunk<LoginResponse, LoginDto>(
    "auth/login",
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await authApi.login(credentials);
            return res;
        } catch (err: any) {
            return rejectWithValue(err.response?.data || "Login failed");
        }
    }
);

// REGISTER THUNK
export const registerThunk = createAsyncThunk<any, RegisterDto>(
    "auth/register",
    async (data, { rejectWithValue }) => {
        try {
            const res = await authApi.register(data);
            return res;
        } catch (err: any) {
            return rejectWithValue(err.response?.data || "Register failed");
        }
    }
);
