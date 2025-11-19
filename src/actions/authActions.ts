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
                    // Get raw role
                    const rawRole: string = res.user.roles?.[0] ?? "Student";

                    // Normalize casing (e.g., admin → Admin)
                    const normalized =
                        rawRole.charAt(0).toUpperCase() +
                        rawRole.slice(1).toLowerCase();

                    // Allowed roles
                    const allowedRoles: UserRole[] = [
                        "Admin",
                        "Teacher",
                        "Student",
                    ];

                    // Safe validated role
                    const role: UserRole = allowedRoles.includes(
                        normalized as UserRole
                    )
                        ? (normalized as UserRole)
                        : "Student";

                    // Navigate based on role
                    if (role === "Student") navigate("/student");
                    else if (role === "Teacher") navigate("/teacher");
                    else if (role === "Admin") navigate("/admin");
                })
                .catch(() => {
                    // Error handled by Redux
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

            // Normalize and cast the role
            const normalizedRole =
                (role.charAt(0).toUpperCase() + role.slice(1).toLowerCase()) as
                "Admin" | "Teacher" | "Student";

            dispatch(
                registerThunk({
                    fullName,
                    email,
                    password,
                    role: normalizedRole,  // <-- FIXED!
                })
            )
                .unwrap()
                .then(() => {
                    navigate("/login");
                })
                .catch(() => {
                    // handled in redux
                });
        };
