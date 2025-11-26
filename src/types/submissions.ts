export interface SubmissionDto {
    id: string;
    submittedAt: string;
    grade: number | null;
    status: string;
    studentId: string;
    studentName: string;
    assignmentId: string;
    fileUrl?: string | null;
    fileName?: string | null;
}

export interface SubmissionCreateDto {
    assignmentId: string;
    file: File; // or i might change it to IformFile if this does not work ...
}

export interface GradeSubmissionDto {
    grade: number;
}
