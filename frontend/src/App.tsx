import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import  Login from "./pages/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/users/login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
