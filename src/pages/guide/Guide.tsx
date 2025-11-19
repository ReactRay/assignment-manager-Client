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
            <img src="/main1.png" alt="Admin dashboard" className="guide-image" />

            <ul className="guide-list">
                <li>View all users in the system</li>
                <li>Create new users</li>
                <li>Assign or remove roles</li>
                <li>Access all admin-only pages</li>
            </ul>

            <h3 className="guide-subheading">1.2 Managing Users</h3>
            <p>Admins can search, filter, and edit user roles easily.</p>
            <img src="/main2.png" alt="Users list" className="guide-image" />

            <ol className="guide-list-numbered">
                <li>Search by name or email</li>
                <li>Filter users by role (Admin / Teacher / Student)</li>
                <li>Assign new roles from the <strong>Add role…</strong> menu</li>
                <li>Remove roles using the minus (–) button</li>
            </ol>

            <h3 className="guide-subheading">1.3 Creating a New User</h3>
            <p>Admins can add new users directly:</p>
            <img src="/main3.png" alt="Create user" className="guide-image" />
            <ul className="guide-list">
                <li>Enter the user's name and email</li>
                <li>Choose a password</li>
                <li>Select roles for the new account</li>
                <li>Submit to create the user</li>
            </ul>

            <hr className="guide-divider" />

            {/* TEACHER SECTION */}
            <h2 className="guide-heading">📚 2. Teacher Guide</h2>
            <p>Teachers can manage their classes, assignments, and student submissions.</p>

            <h3 className="guide-subheading">2.1 Teacher Dashboard</h3>
            <ul className="guide-list">
                <li>View all assigned classes or subjects</li>
                <li>See submissions from students</li>
                <li>Review, approve, or return submissions</li>
                <li>Download or view submitted files</li>
            </ul>

            <h3 className="guide-subheading">2.2 Reviewing Student Submissions</h3>
            <ol className="guide-list-numbered">
                <li>Open the “Submissions” page</li>
                <li>Choose a student’s submission from the list</li>
                <li>Download or open the uploaded file</li>
                <li>Mark the submission as completed, pending, or rejected</li>
                <li>Leave optional feedback</li>
            </ol>

            <h3 className="guide-subheading">2.3 Teacher Tools</h3>
            <ul className="guide-list">
                <li>Access student data related to your class</li>
                <li>Track progress and deadlines</li>
                <li>Communicate feedback</li>
            </ul>

            <hr className="guide-divider" />

            {/* STUDENT SECTION */}
            <h2 className="guide-heading">🎒 3. Student Guide</h2>
            <p>Students can view teacher assignments and upload their work.</p>

            <h3 className="guide-subheading">3.1 Student Dashboard</h3>
            <ul className="guide-list">
                <li>See all assignments given by teachers</li>
                <li>Check deadlines and assignment details</li>
                <li>Track submission history and status</li>
            </ul>

            <h3 className="guide-subheading">3.2 Submitting Work</h3>
            <ol className="guide-list-numbered">
                <li>Go to the “Assignments” page</li>
                <li>Select the relevant assignment</li>
                <li>Upload your file (PDF, image, etc.)</li>
                <li>Press “Submit” to send it to your teacher</li>
                <li>Check back later for teacher feedback</li>
            </ol>

            <h3 className="guide-subheading">3.3 Submission Status</h3>
            <ul className="guide-list">
                <li><strong>Pending:</strong> Teacher has not reviewed it yet</li>
                <li><strong>Completed:</strong> Teacher approved the submission</li>
                <li><strong>Rejected:</strong> Submission needs to be fixed and resubmitted</li>
            </ul>

            <hr className="guide-divider" />

            {/* VIDEO */}
            <h2 className="guide-heading">🎥 4. Video Guide</h2>
            <p>A full walkthrough video will be added here soon.</p>
            <div className="video-placeholder">
                <p>📺 Video Coming Soon</p>
            </div>

        </div>

    );
}
