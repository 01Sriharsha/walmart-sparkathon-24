import Home from "./pages/home";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./routes/ProtectedRoute";
import AdminDashboard from "./pages/admin/Dashboard";
import ManagerDashboard from "./pages/manager/Dashboard";
import SupervisorDashboard from "./pages/supervisor/Dashboard";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import ProfilePage from "./pages/Profile";
import AddSlot from "./pages/addSlot";
import Navbar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import WorkerDashboard from "./pages/worker/Dashboard";
import AddUser from "./pages/AddUser";
import Reports from "./pages/admin/Reports";
import Notification from "./pages/Notification";
import ShipmentForm from "./pages/shipment";
import CheckInPage from "./pages/checkin";
import EagleView from "./pages/eagle-view";
import { TrailerProvider } from "./providers/eagle-view-context";
import LoadingForm from "./pages/LoadingForm";

const App = () => {
  return (
    <>
      <AuthProvider>
        <TrailerProvider>
          <Navbar />
          <Routes>
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route> */}
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/adminDashboard" element={<AdminDashboard />} />
              <Route path="/managerDashboard" element={<ManagerDashboard />} />
              <Route
                path="/supervisorDashboard"
                element={<SupervisorDashboard />}
              />
              <Route path="/workerDashboard" element={<WorkerDashboard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/manager/add-slot" element={<AddSlot />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/admin/reports" element={<Reports />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/loadShipments" element={<LoadingForm />} />


              <Route path="/ship" element={<ShipmentForm />} />
              <Route path="/check-in" element={<CheckInPage />} />
              <Route path="/eagle-view" element={<EagleView />} />
            </Route>
          </Routes>
        </TrailerProvider>
      </AuthProvider>
    </>
  );
};

export default App;
