import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllAssignments } from "../../api/assignmentApi";
import { getMySubmissions } from "../../api/submissionsApi";

export const fetchAssignments = createAsyncThunk(
    "assignments/fetchAll",
    async () => {
        const [assignRes, subsRes] = await Promise.all([
            getAllAssignments(),
            getMySubmissions(),
        ]);

        const assignments = assignRes.data;
        const submissions = subsRes.data;

        const merged = assignments.map((a: any) => {
            const sub = submissions.find((s: any) => s.assignmentId === a.id);

            return {
                ...a,
                submission: sub
                    ? {
                        status: sub.status,
                        grade: sub.grade,
                        fileUrl: sub.fileUrl
                    }
                    : { status: "Missing", grade: null }
            };
        });

        return merged;
    }
);
