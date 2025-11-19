interface Props {
    search: string;
    roleFilter: string;
    onSearchChange: (value: string) => void;
    onRoleChange: (value: string) => void;
}

export default function UsersFilter({
    search,
    roleFilter,
    onSearchChange,
    onRoleChange
}: Props) {
    return (
        <div className="filters-box">
            <input
                type="text"
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
            />

            <select
                value={roleFilter}
                onChange={(e) => onRoleChange(e.target.value)}
                className="role-filter"
            >
                <option value="All">All Roles</option>
                <option value="Admin">Admin</option>
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
            </select>
        </div>
    );
}
