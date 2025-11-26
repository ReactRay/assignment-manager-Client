import UserRow from "./UserRow";
import { FiUser, FiMail, FiAward, FiSettings } from "react-icons/fi";

interface Props {
    users: any[];
    onAddRole: (userId: string, role: string) => void;
    onRemoveRole: (userId: string, role: string) => void;
}

export default function UsersList({ users, onAddRole, onRemoveRole }: Props) {
    return (
        <div className="users-table-wrapper">
            <div className="users-table">
                <table>
                    <thead>
                        <tr>
                            <th><FiUser /> Name</th>
                            <th><FiMail /> Email</th>
                            <th><FiAward /> Roles</th>
                            <th><FiSettings /> Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((u) => (
                            <UserRow
                                key={u.id}
                                user={u}
                                onAddRole={onAddRole}
                                onRemoveRole={onRemoveRole}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
