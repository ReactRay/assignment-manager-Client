import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    createAdminThunk,
    createTeacherThunk,
    createStudentThunk
} from "../../redux/admin/adminThunks";
import "./adminPageStyles/createUserPage.css";
import { type RootState } from "../../redux/index";

// Icons
import { FiShield, FiUser, FiMail, FiLock, FiUserPlus } from "react-icons/fi";

export default function CreateUserPage() {
    const dispatch = useDispatch<any>();
    const { loading, error } = useSelector((state: RootState) => state.admin);

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        role: "Student",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const thunkMap: any = {
            Admin: createAdminThunk,
            Teacher: createTeacherThunk,
            Student: createStudentThunk,
        };

        const thunk = thunkMap[form.role];
        const result = await dispatch(thunk(form));

        if (thunk.rejected.match(result)) return;

        setForm({ fullName: "", email: "", password: "", role: "Student" });
    };

    return (
        <div className="create-user-page">
            <h2>Create New User</h2>

            <form className="create-user-form" onSubmit={handleSubmit}>

                {/* ROLE */}
                <label>Role</label>
                <div className="input-wrapper">
                    <FiShield />
                    <select
                        className="input"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                    >
                        <option value="Student">Student</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>

                {/* FULL NAME */}
                <label>Full Name</label>
                <div className="input-wrapper">
                    <FiUser />
                    <input
                        className="input"
                        type="text"
                        name="fullName"
                        placeholder="Enter full name"
                        value={form.fullName}
                        onChange={handleChange}
                    />
                </div>

                {/* EMAIL */}
                <label>Email</label>
                <div className="input-wrapper">
                    <FiMail />
                    <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                {/* PASSWORD */}
                <label>Password</label>
                <div className="input-wrapper">
                    <FiLock />
                    <input
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>

                {/* SUBMIT BUTTON */}
                <button className="create-btn" type="submit" disabled={loading}>
                    {loading ? "Creating..." : <><FiUserPlus /> Create User</>}
                </button>
            </form>

            {error && <p className="status error">{error}</p>}

        </div>
    );
}
