import { useNavigate, useLocation } from "react-router-dom";
import {
  LuPackage,
  LuPackageSearch,
  LuPackageCheck,
  LuFileSpreadsheet,
  LuSettings,
} from "react-icons/lu";
import { TbNotes } from "react-icons/tb";
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
          }}
          id={location.pathname === "/dashboard" ? "active" : ""}
        >
          <LuPackage />
          <span>Arriving Shipments</span>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            navigate("/dashboard/tcte");
          }}
          id={location.pathname === "/dashboard/tcte" ? "active" : ""}
        >
          <LuPackageSearch />
          <span>Transformation CTE</span>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            navigate("/dashboard/scte");
          }}
          id={location.pathname === "/dashboard/scte" ? "active" : ""}
        >
          <LuPackageCheck />
          <span>Shipping CTE</span>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            navigate("/dashboard/ss");
          }}
          id={location.pathname === "/dashboard/ss" ? "active" : ""}
        >
          <LuFileSpreadsheet />
          <span>Spreadsheet</span>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            navigate("/dashboard/tp");
          }}
          id={location.pathname === "/dashboard/tp" ? "active" : ""}
        >
          <TbNotes />
          <span>Traceability Plan</span>
        </li>
        <li
          className="nav-item"
          onClick={() => {
            navigate("/dashboard/settings");
          }}
          id={location.pathname === "/dashboard/settings" ? "active" : ""}
        >
          <LuSettings />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
