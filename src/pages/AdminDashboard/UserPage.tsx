import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchUsersThunk,
    assignRoleThunk,
    removeRoleThunk
} from "../../redux/admin/adminThunks";
import UsersFilter from "./UserFilter";
import UsersList from "./UserList";
import './adminPageStyles/userPage.css'

export default function UsersPage() {
    const dispatch = useDispatch<any>();
    const { users, loading } = useSelector((state: any) => state.admin);

    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("All");

    useEffect(() => {
        dispatch(fetchUsersThunk());
    }, []);

    // Filtered users (pure logic)
    const filteredUsers = users.filter((u: any) => {
        const matchesSearch =
            u.fullName.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLowerCase().includes(search.toLowerCase());

        const matchesRole =
            roleFilter === "All" || u.roles.includes(roleFilter);

        return matchesSearch && matchesRole;
    });

    // role actions
    const handleAddRole = (userId: string, role: string) => {
        dispatch(assignRoleThunk({ userId, roleName: role })).then(() =>
            dispatch(fetchUsersThunk())
        );
    };

    const handleRemoveRole = (userId: string, role: string) => {
        dispatch(removeRoleThunk({ userId, roleName: role })).then(() =>
            dispatch(fetchUsersThunk())
        );
    };

    return (
        <div className="users-page">

            {/* Filter UI */}
            <UsersFilter
                search={search}
                roleFilter={roleFilter}
                onSearchChange={setSearch}
                onRoleChange={setRoleFilter}
            />

            {/* Table/List */}
            {loading ? (
                <p className="loading">Loading...</p>
            ) : (
                <UsersList
                    users={filteredUsers}
                    onAddRole={handleAddRole}
                    onRemoveRole={handleRemoveRole}
                />
            )}
        </div>
    );
}
