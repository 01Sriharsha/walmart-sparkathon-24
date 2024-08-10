import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import AddSlot from "./pages/addSlot";
const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/addSlot" element={<AddSlot /> } />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
