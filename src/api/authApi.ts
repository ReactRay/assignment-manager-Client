import axiosClient from "./axiosClient";
import { type LoginDto, type RegisterDto, type LoginResponse } from "../types/auth";

const AUTH_URL = "/Auth";

export const authApi = {
    login: async (data: LoginDto): Promise<LoginResponse> => {
        const res = await axiosClient.post<LoginResponse>(`${AUTH_URL}/login`, data);
        return res.data;
    },

    register: async (data: RegisterDto): Promise<any> => {
        const res = await axiosClient.post(`${AUTH_URL}/register`, data);
        return res.data;
    },
};
