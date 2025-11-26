import { FiSearch, FiFilter } from "react-icons/fi";

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
        <div className="users-filter">

            <div className="filter-input-wrapper">
                <FiSearch />
                <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>

            <div className="filter-select-wrapper">
                <FiFilter />
                <select
                    value={roleFilter}
                    onChange={(e) => onRoleChange(e.target.value)}
                >
                    <option value="All">All Roles</option>
                    <option value="Admin">Admin</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                </select>
            </div>

        </div>
    );
}
