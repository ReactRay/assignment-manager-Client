import { type UserDto } from "../../types/auth";

export interface AuthState {
    user: UserDto | null;
    token: string | null;
    isAuthenticated: boolean;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}
