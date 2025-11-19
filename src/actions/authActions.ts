import { registerThunk } from "../redux/auth/authThunks";
import { loginThunk } from "../redux/auth/authThunks";
import { type AppDispatch } from "../redux/index";
import { type NavigateFunction } from "react-router-dom";

type UserRole = "Admin" | "Teacher" | "Student";

export const loginUser =
    (email: string, password: string, navigate: NavigateFunction) =>
        (dispatch: AppDispatch) => {
            if (!email || !password) return;

            dispatch(loginThunk({ email, password }))
                .unwrap()
                .then((res) => {
                    const rawRole = res.user.roles[0];
                    const role = rawRole as UserRole; // <-- FIXED

                    if (role === "Student") navigate("/student");
                    else if (role === "Teacher") navigate("/teacher");
                    else if (role === "Admin") navigate("/admin");
                })
                .catch(() => { });
        };

export const registerUser =
    (
        fullName: string,
        email: string,
        password: string,
        role: string,
        navigate: NavigateFunction
    ) =>
        (dispatch: AppDispatch) => {
            if (!fullName || !email || !password || !role) return;

            dispatch(registerThunk({ fullName, email, password, role }))
                .unwrap()
                .then(() => {
                    navigate("/login"); // on success → login page
                })
                .catch(() => { });
        };
