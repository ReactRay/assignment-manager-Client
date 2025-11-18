import { registerThunk } from './../redux/auth/authThunks';
import { loginThunk } from "../redux/auth/authThunks";
import { type AppDispatch } from "../redux/index";
import { type NavigateFunction } from "react-router-dom";

export const loginUser =
    (email: string, password: string, navigate: NavigateFunction) =>
        (dispatch: AppDispatch) => {
            if (!email || !password) return;

            dispatch(loginThunk({ email, password }))
                .unwrap()
                .then((res) => {
                    const role = res.user.roles[0];

                    if (role === "Student") navigate("/student");
                    else if (role === "Teacher") navigate("/teacher");
                    else if (role === "Admin") navigate("/admin");
                })
                .catch(() => {

                });
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
                    // After successful register → go to login
                    navigate("/login");
                })
                .catch(() => {
                    // Error handled in redux
                });
        };