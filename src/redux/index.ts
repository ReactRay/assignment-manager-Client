import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import assignmentsReducer from "./assignments/assignmentSlice";
import teacherAssignmentsReducer from "./assignments/teacherAssignmentSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        assignments: assignmentsReducer,
        teacherAssignments: teacherAssignmentsReducer
    },
});
// TYPES
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// HOOKS
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
