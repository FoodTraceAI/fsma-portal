import { useState, useEffect } from "react";
import axios from "../../api/axios";
import useRefreshToken from "../../hooks/useRefreshToken";
import useAuth from "../../hooks/useAuth";
import "./Dashboard.css";

const Dashboard = () => {
  const auth = useAuth().auth;

  const refresh = useRefreshToken();
  const [sheet, setSheet] = useState<[]>();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    // const getSheet = async () => {
    //   try {
    //     console.log(auth?.accessToken, "accessToken");
    //     const res = await axios.get("/sheet", {
    //       headers: { Authorization: `Bearer ${auth?.accessToken}` },
    //       signal: controller.signal,
    //     });
    //     console.log(res.data);
    //     if (isMounted) {
    //       setSheet(res.data);
    //     }
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };

    // getSheet();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [auth?.accessToken]);

  return (
    <div className="Dashboard">
      <div className="detail-container">
        <div className="header">
          <p>Arriving Supplier Shipments</p>
          <button className="import-shipping-cte">
            Import Shipping CTE File
          </button>
        </div>
        <div className="detail-table">
          <p className="table-topper">Supplier Shipping CTEs</p>
          <table className="details">
            <thead className="table-head">
              <tr className="table-head-row">
                <th className="details-head">Quantity & UOM</th>
                <th className="details-head">Product Description</th>
                <th className="details-head">Shipped From</th>
                <th className="details-head">Shipping Date</th>
                <th className="details-head">Status</th>
                <th className="details-head">Actions</th>
              </tr>
            </thead>
            <tbody className="table-body">
              <tr className="table-body-row">
                <td className="details-body">8 cases</td>
                <td className="details-body">
                  Rutabaga/Rutabaga Sliced 4EA x 2.5LB
                </td>
                <td className="details-body">Prime Produce - San Francisco</td>
                <td className="details-body">Jan 2, 2024</td>
                <td className="details-body">*Pending*</td>
                <td className="details-body">
                  <button className="action-btn">View</button>
                </td>

              </tr>
              <tr className="table-body-row">
                <td className="details-body">10 cases</td>
                <td className="details-body">
                  Carrots/Carottes Baby 4EA x 3LB
                </td>
                <td className="details-body">Fresh Produce Co - Sacremento</td>
                <td className="details-body">Jan 3, 2024</td>
                <td className="details-body">*Pending*</td>
                <td className="details-body">
                  <button className="action-btn">View</button>
                </td>
              </tr>
              <tr className="table-body-row">
                <td className="details-body">15 cases</td>
                <td className="details-body">
                  Squash/Courge Butternut 5EA x 4LB
                </td>
                <td className="details-body">Fruit Farm - Los Angeles</td>
                <td className="details-body">Jan 3, 2024</td>
                <td className="details-body">*Pending*</td>
                <td className="details-body">
                  <button className="action-btn">View</button>
                </td>
              </tr>
              <tr className="table-body-row">
                <td className="details-body">20 cases</td>
                <td className="details-body">Peas/Pois Snap 6EA x 5LB</td>
                <td className="details-body">Tropical Fruits - Miami</td>
                <td className="details-body">Jan 5, 2024</td>
                <td className="details-body">*Pending*</td>
                <td className="details-body">
                  <button className="action-btn">View</button>
                </td>
              </tr>
              <tr className="table-body-row">
                <td className="details-body">12 cases</td>
                <td className="details-body">Corn/Mais Sweet 4EA x 3LB</td>
                <td className="details-body">Citrus Grove - Orlando</td>
                <td className="details-body">Jan 6, 2024</td>
                <td className="details-body">*Pending*</td>
                <td className="details-body">
                  <button className="action-btn">View</button>
                </td>
              </tr>
              <tr className="table-body-row">
                <td className="details-body">18 cases</td>
                <td className="details-body">Kale/Chou Frisé Baby 5EA x 2LB</td>
                <td className="details-body">Vineyard - Napa Valley</td>
                <td className="details-body">Jan 8, 2024</td>
                <td className="details-body">*Pending*</td>
                <td className="details-body">
                  <button className="action-btn">View</button>
                </td>
              </tr>
              <tr className="table-body-row">
                <td className="details-body">25 cases</td>
                <td className="details-body">
                  Strawberries/Strawberries Fresh 6EA x 1LB
                </td>
                <td className="details-body">Berry Farm - Santa Cruz</td>
                <td className="details-body">Jan 8, 2024</td>
                <td className="details-body">*Pending*</td>
                <td className="details-body">
                  <button className="action-btn">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
