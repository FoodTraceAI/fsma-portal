import "./Shipping.css";
import { useState } from "react";

const Shipping = () => {
  const [activeId, setActiveId] = useState("receiving");

  return (
    <div className="Dashboard">
      <div className="detail-container">
        <div className="header">
          <p>Shipping CTEs</p>
        </div>
        <div className="detail-table">
          <div className="table-topper">
            <div
              className="r-cte"
              id={activeId === "receiving" ? "active" : ""}
              onClick={() => setActiveId("receiving")}
            >
              Receiving CTEs
            </div>
            <div
              className="t-cte"
              id={activeId === "transformation" ? "active" : ""}
              onClick={() => setActiveId("transformation")}
            >
              Transformation CTEs
            </div>
          </div>
          <div className="table-container">
            <table className="details">
              <thead className="table-head">
                <tr className="table-head-row">
                  <th className="details-head">Quantity & UOM</th>
                  <th className="details-head">Product Description</th>
                  <th className="details-head">Source Location</th>
                  <th className="details-head">Received Date</th>
                  <th className="details-head">Actions</th>
                  <th className="details-head"></th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr className="table-body-row">
                  <td className="details-body">8 cases</td>
                  <td className="details-body">
                    Rutabaga/Rutabaga Sliced 4EA x 2.5LB
                  </td>
                  <td className="details-body">
                    Prime Produce - San Francisco
                  </td>
                  <td className="details-body">Jan 2, 2024</td>
                  <td className="details-body">
                    <button className="action-btn">View</button>
                  </td>
                  <td className="details-body">
                    <button className="prep-btn">Ship food</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
