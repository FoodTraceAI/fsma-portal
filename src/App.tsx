// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        {["/", "/login"].map((path) => (
          <Route key={path} path={path} element={<Login />} />
        ))}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
