import { type SubmissionDto } from "./submissions";

export interface AssignmentResponseDto {
    id: string;
    title: string;
    description: string;
    dueDate: string; // backend returns ISO string
    teacherId: string;
    teacherName: string;
    submissions: SubmissionDto[];
}

export interface CreateAssignmentDto {
    title: string;
    description: string;
    dueDate: string; // ISO format
}

export interface UpdateAssignmentDto {
    title: string;
    description: string;
    dueDate: string;
}
