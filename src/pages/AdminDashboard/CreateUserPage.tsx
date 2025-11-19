import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    createAdminThunk,
    createTeacherThunk,
    createStudentThunk
} from "../../redux/admin/adminThunks";
import "./adminPageStyles/createUserPage.css";

export default function CreateUserPage() {
    const dispatch = useDispatch<any>();

    const [role, setRole] = useState("Student");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [status, setStatus] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setStatus("loading");

        const dto = { fullName, email, password };

        let action;
        if (role === "Admin") action = createAdminThunk(dto);
        if (role === "Teacher") action = createTeacherThunk(dto);
        if (role === "Student") action = createStudentThunk(dto);

        try {
            await dispatch(action);
            setStatus("success");
            setFullName("");
            setEmail("");
            setPassword("");
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="create-user-page">
            <h2>Create New User</h2>

            <form className="create-user-form" onSubmit={handleSubmit}>
                {/* ROLE SELECT */}
                <label>Role</label>
                <select
                    className="input"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Admin">Admin</option>
                </select>

                {/* FULL NAME */}
                <label>Full Name</label>
                <input
                    className="input"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                />

                {/* EMAIL */}
                <label>Email</label>
                <input
                    className="input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@email.com"
                />

                {/* PASSWORD */}
                <label>Password</label>
                <input
                    className="input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                />

                <button className="create-btn" type="submit">
                    Create User
                </button>
            </form>

            {status === "loading" && <p className="status loading">Creating...</p>}
            {status === "success" && (
                <p className="status success">User created successfully!</p>
            )}
            {status === "error" && (
                <p className="status error">Something went wrong.</p>
            )}
        </div>
    );
}
