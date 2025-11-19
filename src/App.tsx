import { Routes, Route } from "react-router-dom";


import Home from "./pages/home/Home";
import UsersPage from "./pages/AdminDashboard/UserPage";
import CreateUserPage from "./pages/AdminDashboard/CreateUserPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import NotAuthorized from "./pages/not-authorized/NotAuthorized";
import Guide from "./pages/guide/Guide";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";


import RoleRoute from "./components/RoleRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Public Home */}
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />

        {/* Public Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student Route */}
        <Route
          path="/student"
          element={
            <RoleRoute allowed={["Student"]}>
              <StudentDashboard />
            </RoleRoute>
          }
        />

        {/* Teacher Route */}
        <Route
          path="/teacher"
          element={
            <RoleRoute allowed={["Teacher"]}>
              <TeacherDashboard />
            </RoleRoute>
          }
        />

        {/* Admin Route (nested pages inside) */}
        <Route
          path="/admin"
          element={
            <RoleRoute allowed={["Admin"]}>
              <AdminDashboard />
            </RoleRoute>
          }
        >
          <Route path="users" element={<UsersPage />} />
          <Route path="create-user" element={<CreateUserPage />} />
        </Route>

        {/* Unauthorized Page */}
        <Route path="/not-authorized" element={<NotAuthorized />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
