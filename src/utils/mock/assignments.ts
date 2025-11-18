// src/mock/studentAssignments.ts
export const mockAssignments = [
    {
        id: "a1",
        title: "Math Homework",
        description: "Solve exercises on page 42.",
        dueDate: "2025-11-21T16:11:53.045",
        teacherName: "Mr. Cohen",
    },
    {
        id: "a2",
        title: "English Writing",
        description: "Write a 500-word essay.",
        dueDate: "2025-11-22T15:00:00.000",
        teacherName: "Mrs. Brown",
    },
    {
        id: "a3",
        title: "Science Project",
        description: "Build a model of the solar system.",
        dueDate: "2025-11-23T10:30:00.000",
        teacherName: "Dr. Einstein",
    },
];

export const mockStudentSubmissions = [
    {
        assignmentId: "a1",
        status: "Graded",
        grade: 90,
        submittedAt: "2025-11-18T17:26:34.689",
    },
    {
        assignmentId: "a2",
        status: "Submitted",
        grade: null,
        submittedAt: "2025-11-18T17:29:24.125",
    },
    // a3 has no submission → Missing
];
