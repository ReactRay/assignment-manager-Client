interface User {
    id: string;
    fullName: string;
    email: string;
    roles: string[];
}

export function filterUsers(
    users: User[],
    search: string,
    roleFilter: string
) {
    let result = [...users];

    // --- 1️⃣ FILTER BY SEARCH TEXT (name or email) ---
    if (search.trim() !== "") {
        const lower = search.toLowerCase();
        result = result.filter(
            (u) =>
                u.fullName.toLowerCase().includes(lower) ||
                u.email.toLowerCase().includes(lower)
        );
    }

    // --- 2️⃣ FILTER BY ROLE ---
    if (roleFilter !== "All") {
        result = result.filter((u) => u.roles.includes(roleFilter));
    }

    return result;
}
