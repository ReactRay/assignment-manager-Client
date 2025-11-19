import UserRow from "./UserRow";

interface Props {
    users: any[];
    onAddRole: (userId: string, role: string) => void;
    onRemoveRole: (userId: string, role: string) => void;
}

export default function UsersList({ users, onAddRole, onRemoveRole }: Props) {
    return (
        <div className="users-table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Roles</th>
                        <th>Actions</th>
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
    );
}
