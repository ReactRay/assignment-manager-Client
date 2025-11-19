interface Props {
    user: any;
    onAddRole: (userId: string, role: string) => void;
    onRemoveRole: (userId: string, role: string) => void;
}

export default function UserRow({ user, onAddRole, onRemoveRole }: Props) {
    return (
        <tr>
            <td>{user.fullName}</td>
            <td>{user.email}</td>



            <td>
                <div className="role-badge-group">
                    {user.roles.map((role: string) => (
                        <span className="role-badge" key={role}>
                            {role}
                            <button
                                className="remove-btn"
                                onClick={() => onRemoveRole(user.id, role)}
                            >
                                –
                            </button>
                        </span>
                    ))}
                </div>
            </td>

            <td>
                <select
                    defaultValue=""
                    className="role-select"
                    onChange={(e) => onAddRole(user.id, e.target.value)}
                >
                    <option value="" disabled>
                        Add role...
                    </option>
                    <option value="Admin">Admin</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                </select>
            </td>

        </tr>
    );
}
