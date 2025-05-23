// Page for receiving shipments
// "Transformation" refers to the process of preparing food for service, 
// including receiving, storing, and preparing food items.

import "./Transformation.css";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { isAxiosError } from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import { receivingShipment } from "../../types/types";
// import { CanceledError } from "axios";
import Cookies from "js-cookie"; // [ ]: when httpOnly
import SupShipView from "../../components/ViewPop/SupShipView";

const Transformation = () => {
  const auth = useAuth().auth;
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const locate = useLocation();

  // const [location, setLocation] = useState<string[]>([]);
  // const [length, setLength] = useState<number>(0);
  // const [cteRec, setCteRec] = useState<cteReceive[]>([]);
  const [receivingShipment, setRecShip] = useState<receivingShipment[]>([]);
  const [viewPop, setViewPop] = useState(false);
  const [selectedShip, setSelectedShip] = useState<receivingShipment | null>(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getData = async () => {
      try {
        const res = await axiosPrivate.get(
          `/portal/receivedshipments?locationId=${Cookies.get("locationId")}`,
          {
            headers: {
              Authorization: `${Cookies.get("tokenType")} ${Cookies.get("accessToken")}`,
            }, // TODO: change when httpOnly
            signal: controller.signal,
          }
        );
        if (isMounted) {
          setRecShip(res.data);
        }
      } catch (err) {
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
  }, [auth?.accessToken, axiosPrivate, navigate, locate]);

  const handleViewClick = (ship: receivingShipment) => {
    ship.type = "receiving";
    setSelectedShip(ship);
    setViewPop(true);
  };

  const handleClose = () => {
    setViewPop(false);
  };

  return (
    <div className="Dashboard">
      <div className="detail-container">
        <div className="header">
          <p>Transformation CTEs</p>
        </div>
        <div className="detail-table">
          <div className="table-topper">
            <div id="active">Receiving CTEs</div>
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
                {receivingShipment.map((rec: receivingShipment) => (
                  <tr key={rec.cteReceiveId} className="table-body-row">
                    <td className="details-body">{`${rec.quantity} ${rec.unitOfMeasure}`}</td>
                    <td className="details-body">{rec.prodDesc}</td>
                    <td className="details-body">{`${rec.shipFromBus}, ${rec.shipFromCity}`}</td>
                    <td className="details-body">
                      {rec.receiveDate.toString()}
                    </td>
                    <td className="details-body">
                      <button
                        className="action-btn"
                        onClick={() => handleViewClick(rec)}
                      >
                        View
                      </button>
                    </td>
                    <td className="details-body">
                      <button className="prep-btn">Prep food</button>
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
    </div>
  );
};

export default Transformation;
