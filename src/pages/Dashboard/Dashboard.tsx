// landing page. also supplier shipment page.

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
// import useRefreshToken from "../../hooks/useRefreshToken";
import useAuth from "../../hooks/useAuth";
import "./Dashboard.css";
import { arrivingShipment } from "../../types/types";
import SupShipView from "../../components/ViewPop/SupShipView";
import { isAxiosError } from "axios";
import ImportPop from "../../components/ViewPop/ImportPop";
import CreateSupShip from "../../components/ViewPop/CreateSupShip";
import Cookies from "js-cookie"; //TODO: remove when httpOnly

const Dashboard = () => {
  const auth = useAuth().auth;
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const locate = useLocation();

  const [supShip, setSupShip] = useState<arrivingShipment[]>([]);
  const [viewPop, setViewPop] = useState(false);
  const [importPop, setImportPop] = useState(false);
  const [selectedShip, setSelectedShip] = useState<arrivingShipment | null>(
    null
  );
  const [viewForm, setViewForm] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getData = async () => {
      try {
        //FIXME: take a look once the API is ready
        const res = await axiosPrivate.get(
          `/portal/arrivingshipments?locationId=${Cookies.get("locationId")}`,
          {
            // const res = await axiosPrivate.get(
            //   `/portal/arrivingshipments?locationId=3`,
            //   {
            // headers: { Authorization: `Bearer ${auth?.accessToken}` }, // TODO: change when httpOnly
            headers: {
              Authorization: `${Cookies.get("tokenType")} ${Cookies.get("accessToken")}`,
            }, // TODO: change when httpOnly
            signal: controller.signal,
          }
        );
        if (isMounted) {
          setSupShip(res.data);
        }
      } catch (err) {
        // console.error(err);
        if (
          isAxiosError(err) &&
          (err.response?.status === 401 || err.response?.status === 403)
        ) {
          navigate("/login", { state: { from: locate }, replace: true });
        }
      }
    };

    getData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [auth?.accessToken, axiosPrivate, locate, navigate]);

  const handleViewClick = (ship: arrivingShipment) => {
    ship.type = "arriving";
    setSelectedShip(ship);
    setViewPop(true);
  };

  const handleClose = () => {
    setViewPop(false);
  };

  const handleImportClick = () => {
    setImportPop(true);
  };

  const handleImportClose = () => {
    setImportPop(false);
  };

  return (
    <div className="Dashboard">
      <div className="detail-container">
        <div className="header">
          <p>Arriving Supplier Shipments</p>
          <button className="import-shipping-cte" onClick={handleImportClick}>
            Import Shipping CTE File
          </button>
        </div>
        <div className="detail-table">
          <div className="table-topper">
            <div id="active">Supplier Shipping CTEs</div>
            <button
              className="create-sup-shipping-cte"
              onClick={() => {
                setViewForm(true);
              }}
            >
              Create New CTE
            </button>
          </div>
          <div className="table-container">
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
                {supShip?.map((ship: arrivingShipment) => (
                  <tr key={ship.supShipCteId} className="table-body-row">
                    <td className="details-body">{`${ship.quantity} ${ship.unitOfMeasure}`}</td>
                    <td className="details-body">{ship.prodDesc}</td>
                    <td className="details-body">{ship.shipFromCity}</td>
                    <td className="details-body">{ship.shipDate.toString()}</td>
                    <td className="details-body">{ship.supShipStatus}</td>
                    <td className="details-body">
                      <button
                        className="action-btn"
                        onClick={() => handleViewClick(ship)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <SupShipView
        supShip={selectedShip}
        onClose={handleClose}
        isVisible={viewPop}
      />
      <ImportPop isOpen={importPop} onClose={handleImportClose} />
      <CreateSupShip onClose={() => setViewForm(false)} isVisible={viewForm} />
    </div>
  );
};

export default Dashboard;
