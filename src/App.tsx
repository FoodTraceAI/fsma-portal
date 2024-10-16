// import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Transformation from "./pages/Transformation/Transformation";
import Shipping from "./pages/Shipping/Shipping";
import Spreadsheet from "./pages/Spreadsheet/Spreadsheet";
import Traceability from "./pages/Traceability/Traceability";

function App() {
  // const [count, setCount] = useState(0)
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/login" && "/login/" && (
        <Navbar />
      )}
      <Routes>
        {["/", "/login"].map((path) => (
          <Route key={path} path={path} element={<Login />} />
        ))}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/tcte" element={<Transformation />} />
        <Route path="/dashboard/scte" element={<Shipping />} />
        <Route path="/dashboard/ss" element={<Spreadsheet />} />
        <Route path="/dashboard/tp" element={<Traceability />} />
      </Routes>
    </div>
  );
}

export default App;
