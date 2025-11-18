export interface LoginDto {
    email: string;
    password: string;
}

export interface RegisterDto {
    fullName: string;
    email: string;
    password: string;
    role: "Teacher" | "Student" | "Admin"; // you said Admin exists too
}

export interface UserDto {
    id: string;
    fullName: string;
    email: string;
    roles: string[]; // e.g. ["Teacher"]
}

export interface LoginResponse {
    token: string;
    user: UserDto;
}

