import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
// import useRefreshToken from "../../hooks/useRefreshToken";
import useAuth from "../../hooks/useAuth";
import "./Dashboard.css";
import { supShipCTE } from "../../types/types";
import SupShipView from "../../components/ViewPop/SupShipView";
import { isAxiosError, CanceledError } from "axios";
import ImportPop from "../../components/ViewPop/ImportPop";

const Dashboard = () => {
  const auth = useAuth().auth;
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const locate = useLocation();

  const [supShip, setSupShip] = useState<supShipCTE[]>([]);
  const [location, setLocation] = useState<string[]>([]);
  const [viewPop, setViewPop] = useState(false);
  const [importPop, setImportPop] = useState(false);
  const [selectedShip, setSelectedShip] = useState<supShipCTE | null>(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getData = async () => {
      try {
        // console.log(auth?.accessToken, "accessToken");
        // console.log(auth?.refreshToken, "refreshToken");
        let res = await axiosPrivate.get("/supshipcte/1", {
          headers: { Authorization: `Bearer ${auth?.accessToken}` },
          signal: controller.signal,
        });
        // console.log(res.data);
        if (isMounted) {
          setSupShip([res.data]);
        }

        res = await axiosPrivate.get("/supshipcte/2", {
          headers: { Authorization: `Bearer ${auth?.accessToken}` },
          signal: controller.signal,
        });
        // console.log(res.data);
        if (isMounted) {
          setSupShip((prevSupShip) => [...prevSupShip, res.data]);
        }

        res = await axiosPrivate.get("/supshipcte/3", {
          headers: { Authorization: `Bearer ${auth?.accessToken}` },
          signal: controller.signal,
        });
        // console.log(res.data);
        if (isMounted) {
          setSupShip((prevSupShip) => [...prevSupShip, res.data]);
        }
      } catch (err) {
        // console.error(err);
        if (isAxiosError(err) && err.response?.status === 400) {
          navigate("/login", { state: { from: locate }, replace: true });
        }
      }
    };

    getData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [auth?.accessToken, auth.refreshToken, axiosPrivate, locate, navigate]);

  // console.log(supShip, "supShip");

  useEffect(() => {
    setLocation([]);
    const controller = new AbortController();
    let isMounted = true;
    const getLocation = async (locationId: number) => {
      try {
        const res = await axiosPrivate.get(`/address/${locationId}`, {
          headers: { Authorization: `Bearer ${auth?.accessToken}` },
          signal: controller.signal,
        });
        return `${res.data.city}, ${res.data.state}`;
      } catch (err) {
        if (!CanceledError) {
          console.log(err);
        }
        if (isAxiosError(err) && err.response?.status === 400) {
          navigate("/login", { state: { from: locate }, replace: true });
        }
      }
    };

    const fetchLocation = async (locationId: number) => {
      try {
        const result = await getLocation(locationId);
        if (isMounted) {
          setLocation((prevLocation) => [
            ...prevLocation,
            result ?? "Unknown Location",
          ]);
        }
      } catch (err) {
        console.error("Error fetching location:", err);
        if (isAxiosError(err) && err.response?.status === 400) {
          navigate("/login", { state: { from: locate }, replace: true });
        }
      }
    };

    if (supShip.length > 0) {
      supShip.forEach((ship) => {
        fetchLocation(ship.shipFromLocationId);
      });
    }

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [auth?.accessToken, axiosPrivate, locate, navigate, supShip]);

  const handleViewClick = (ship: supShipCTE) => {
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
                {supShip?.map((ship: supShipCTE) => (
                  <tr key={ship.id} className="table-body-row">
                    <td className="details-body">{`${ship.quantity} ${ship.unitOfMeasure}`}</td>
                    <td className="details-body">{ship.foodDesc}</td>
                    <td className="details-body">{location[ship.id - 1]}</td>
                    <td className="details-body">{ship.shipDate}</td>
                    <td className="details-body">{ship.supCteStatus}</td>
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
    </div>
  );
};

export default Dashboard;
