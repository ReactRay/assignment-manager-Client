import "./guide.css";

export default function Guide() {
    return (
        <div className="guide-container">

            <h1 className="guide-title">📘 SchoolsIT – System Guide</h1>
            <p className="guide-subtitle">
                This page explains how to use the SchoolsIT platform for all user types:
                <strong> Admins, Teachers, and Students.</strong>
            </p>

            {/* ADMIN SECTION */}
            <h2 className="guide-heading">🔐 1. Admin Guide</h2>
            <p>The Admin has full control over the system. Below is an overview of admin capabilities.</p>

            <h3 className="guide-subheading">1.1 Admin Dashboard</h3>
            <p>The dashboard gives you quick access to all management tools.</p>
            <img src="/admin-dash.png" alt="Admin dashboard" className="guide-image" />

            <ul className="guide-list">
                <li>View all users in the system</li>
                <li>Create new users</li>
                <li>Assign or remove roles</li>
                <li>Access all admin-only pages</li>
            </ul>

            <h3 className="guide-subheading">1.2 Managing Users</h3>
            <p>Admins can search, filter, and edit user roles easily.</p>
            <img src="/admin-users.png" alt="Users list" className="guide-image" />

            <ol className="guide-list-numbered">
                <li>Search by name or email</li>
                <li>Filter users by role (Admin / Teacher / Student)</li>
                <li>Assign new roles from the <strong>Add role…</strong> menu</li>
                <li>Remove roles using the minus (–) button</li>
            </ol>

            <h3 className="guide-subheading">1.3 Creating a New User</h3>
            <p>Admins can add new users directly:</p>
            <img src="/admin-createuser.png" alt="Create user" className="guide-image" />
            <ul className="guide-list">
                <li>Enter the user's name and email</li>
                <li>Choose a password</li>
                <li>Select roles for the new account</li>
                <li>Submit to create the user</li>
            </ul>

            <hr className="guide-divider" />

            {/* TEACHER SECTION */}
            <h2 className="guide-heading">📚 2. Teacher Guide</h2>
            <p>Teachers can manage assignments , download and grade student submissions.</p>
            <img src="/teacherDash.png" alt="Users list" className="guide-image" />

            <h3 className="guide-subheading">2.1 Teacher Dashboard</h3>

            <ul className="guide-list">
                <li>See submissions from students</li>
                <li>Download or view submitted files</li>
            </ul>

            <h3 className="guide-subheading">2.2 Reviewing Student Submissions</h3>
            <img src="/teacherView.png" alt="Users list" className="guide-image" />

            <ol className="guide-list-numbered">
                <li>Open the “Submissions” page</li>
                <li>Choose a student’s submission from the list</li>
                <li>Download the uploaded file</li>
                <li>Grade the student's submission</li>
            </ol>

            <hr className="guide-divider" />

            {/* STUDENT SECTION */}
            <h2 className="guide-heading">🎒 3. Student Guide</h2>
            <p>Students can view teacher assignments and upload their work.</p>
            <img src="/StudentView.png" alt="Users list" className="guide-image" />

            <h3 className="guide-subheading">3.1 Student Dashboard</h3>
            <ul className="guide-list">
                <li>See all assignments given by teachers</li>
                <li>Check deadlines and assignment details</li>
                <li>Track submission history and status</li>
            </ul>

            <h3 className="guide-subheading">3.2 Submitting Work</h3>
            <img src="/studentUpload.png" alt="Users list" className="guide-image" />

            <ol className="guide-list-numbered">
                <li>Go to the “Assignments” page</li>
                <li>Select the relevant assignment</li>
                <li>Upload your file (PDF, image, etc.)</li>
                <li>Press “Submit” to send it to your teacher</li>
                <li>Check back later for grade on assignment</li>
            </ol>

            <hr className="guide-divider" />

            <h2 className="guide-heading">🎥 4. Video Guide</h2>
            <p>Watch the full walkthrough of the system below.</p>

            <div className="guide-video-wrapper">
                <video
                    className="guide-video"
                    controls
                    preload="metadata"
                >
                    <source src="https://res.cloudinary.com/danlxus36/video/upload/v1763583961/2025-11-19_22-20-13_c8fwuj.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>

    );
}
