import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import UsersPage from "./pages/AdminDashboard/UserPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import NotAuthorized from "./pages/not-authorized/NotAuthorized";
import CreateUserPage from "./pages/AdminDashboard/CreateUserPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>


        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />


        <Route
          path="/student"
          element={
            <ProtectedRoute allowedRoles={["Student", "Admin"]}>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />


        <Route
          path="/teacher"
          element={
            <ProtectedRoute allowedRoles={["Teacher", "Admin"]}>
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />


        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["Admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route path="users" element={<UsersPage />} />
          <Route path="create-user" element={<CreateUserPage />} />

        </Route>


        <Route path="/not-authorized" element={<NotAuthorized />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
