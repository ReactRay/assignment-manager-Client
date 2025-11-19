import "./not-authorized.css";

export default function NotAuthorized() {
    return (
        <div className="notauth">
            <h1 className="notauth__title">Access Denied</h1>
            <p className="notauth__sub">
                You are not authorized to view this page.
            </p>
        </div>
    );
}
