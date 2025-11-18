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
    file: File; // Browser File instead of IFormFile
}

export interface GradeSubmissionDto {
    grade: number;
}
