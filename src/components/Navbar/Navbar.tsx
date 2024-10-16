import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navbar">
      <h1>FoodTraceAI</h1>
      <ul className="nav-list">
        <li
          className="nav-item"
          onClick={() => {
            navigate("/dashboard");
            // console.log(location.pathname);
          }}
          id={location.pathname === "/dashboard" ? "active" : ""}
        >
          Arriving Shipments
        </li>
        <li
          className="nav-item"
          onClick={() => {
            navigate("/dashboard/tcte");
          }}
          id={location.pathname === "/dashboard/tcte" ? "active" : ""}
        >
          Transformation CTE
        </li>
        <li
          className="nav-item"
          onClick={() => {
            navigate("/dashboard/scte");
          }}
          id={location.pathname === "/dashboard/scte" ? "active" : ""}
        >
          Shipping CTE
        </li>
        <li
          className="nav-item"
          onClick={() => {
            navigate("/dashboard/ss");
          }}
          id={location.pathname === "/dashboard/ss" ? "active" : ""}
        >
          Spreadsheet
        </li>
        <li
          className="nav-item"
          onClick={() => {
            navigate("/dashboard/tp");
          }}
          id={location.pathname === "/dashboard/tp" ? "active" : ""}
        >
          Traceability Plan
        </li>
        <li
          className="nav-item"
          onClick={() => {
            navigate("/dashboard/settings");
          }}
          id={location.pathname === "/dashboard/settings" ? "active" : ""}
        >
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
