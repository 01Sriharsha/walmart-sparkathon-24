import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/home";
// import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./routes/ProtectedRoute";
import AdminDashboard from "./pages/admin/Dashboard";
import ManagerDashboard from "./pages/manager/Dashboard";
import SupervisorDashboard from "./pages/supervisor/Dashboard";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import ProfilePage from "./pages/Profile";
import AddUser from "./pages/AddUser";
import AddSlot from "./pages/addSlot";
const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route> */}
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/adminDashboard" element={<AdminDashboard/>} />
            <Route path="/managerDashboard" element={<ManagerDashboard/>} />
            <Route path="/supervisorDashboard" element={<SupervisorDashboard/>} />
            <Route path="/calendar" element={<Calendar/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
          </Route>
        </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
