import { cteReceive } from "../../types/types";
import "./Shipping.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import { isAxiosError } from "axios";
import RecToShip from "../../components/ViewPop/RecToShip";

const Shipping = () => {
  const auth = useAuth().auth;
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const locate = useLocation();
  
  const [activeId, setActiveId] = useState("receiving");
  const [cteRec, setCteRec] = useState<cteReceive[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCTE, setSelectedCTE] = useState<cteReceive | null>(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getRecData = async () => {
      try {
        const res = await axiosPrivate.get("/cte/receive/findAll", {
          headers: { Authorization: `Bearer ${auth?.accessToken}` },
          signal: controller.signal,
        });

        if (isMounted) {
          setCteRec(res.data);
        }
      } catch (err) {
        if (isAxiosError(err) && err.response?.status === 400) {
          navigate("/login", { state: { from: locate }, replace: true });
        }
      }
    };

    getRecData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [axiosPrivate, auth?.accessToken, auth.refreshToken, navigate, locate]);

  const handleShip = (cte: cteReceive) => {
    setSelectedCTE(cte);
    setIsVisible(true);
    console.log(cte);
  }

  const handleClose = () => {
    setIsVisible(false);
  };

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
              Transformed CTEs
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
                {/* <tr className="table-body-row">
                  <td className="details-body">8 cases</td>
                  <td className="details-body">
                    Iceburg Lettuce Wrapped - 24 heads
                  </td>
                  <td className="details-body">Processor City, IL</td>
                  <td className="details-body">2024-01-02</td>
                  <td className="details-body">
                    <button className="action-btn">View</button>
                  </td>
                  <td className="details-body">
                    <button className="prep-btn">Ship food</button>
                  </td>
                </tr> */}

                {/* 
                  FIXME: take a look at it 
                */}
                {cteRec.map((cte) => (
                  <tr key={cte.id} className="table-body-row">
                    <td className="details-body">{`${cte.quantity} ${cte.unitOfMeasure}`}</td>
                    <td className="details-body">{cte.prodDesc}</td>
                    <td className="details-body">{cte.locationId}</td>
                    <td className="details-body">{cte.receiveDate}</td>
                    <td className="details-body">
                      <button className="action-btn">View</button>
                    </td>
                    <td className="details-body">
                      <button className="prep-btn" onClick={() => handleShip(cte)}>Ship food</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <RecToShip 
        receiveCTE = {selectedCTE as cteReceive}
        onClose = {handleClose}
        isVisible = {isVisible}
        onSave = {() => console.log("SAVED")}
      />
    </div>
  );
};

export default Shipping;
