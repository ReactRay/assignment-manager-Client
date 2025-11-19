import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./adminStyles/admincontent.css";

export default function AdminContent() {
    return (
        <div className="admin-layout">
            <Sidebar />

            <main className="admin-content">
                <Outlet />
            </main>
        </div>
    );
}
