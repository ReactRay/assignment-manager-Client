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

    // filter by text email or name
    if (search.trim() !== "") {
        const lower = search.toLowerCase();
        result = result.filter(
            (u) =>
                u.fullName.toLowerCase().includes(lower) ||
                u.email.toLowerCase().includes(lower)
        );
    }

    // filter by role 
    if (roleFilter !== "All") {
        result = result.filter((u) => u.roles.includes(roleFilter));
    }

    return result;
}


export function extractFileName(contentDisposition: string | undefined) {
    if (!contentDisposition) return "download";

    // Try filename="..."
    const fileNameMatch = contentDisposition
        .split(";")
        .find(x => x.trim().startsWith("filename="));

    if (fileNameMatch) {
        return fileNameMatch.split("=")[1].trim().replace(/"/g, "");
    }

    // Try filename*=UTF-8''...
    const utf8Match = contentDisposition
        .split(";")
        .find(x => x.trim().startsWith("filename*="));

    if (utf8Match) {
        const value = utf8Match.split("''")[1];
        return decodeURIComponent(value);
    }

    return "download";
}
