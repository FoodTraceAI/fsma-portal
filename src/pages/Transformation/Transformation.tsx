import "./Transformation.css";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { isAxiosError } from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";
import { cteReceive } from "../../types/types";
import { CanceledError } from "axios";

const Transformation = () => {
  const auth = useAuth().auth;
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const locate = useLocation();

  // const [location, setLocation] = useState<string[]>([]);
  // const [length, setLength] = useState<number>(0);
  const [cteRec, setCteRec] = useState<cteReceive[]>([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getData = async () => {
      try {
        let res = await axiosPrivate.get("/cte/receive/1", {
          headers: { Authorization: `Bearer ${auth?.accessToken}` },
          signal: controller.signal,
        });

        if (isMounted) {
          setCteRec([res.data]);
        }

        res = await axiosPrivate.get("/cte/receive/2", {
          headers: { Authorization: `Bearer ${auth?.accessToken}` },
          signal: controller.signal,
        });

        if (isMounted) {
          setCteRec((prevCteRec) => [...prevCteRec, res.data]);
        }

        res = await axiosPrivate.get("/cte/receive/3", {
          headers: { Authorization: `Bearer ${auth?.accessToken}` },
          signal: controller.signal,
        });

        if (isMounted) {
          setCteRec((prevCteRec) => [...prevCteRec, res.data]);
        }
      } catch (err) {
        if (!CanceledError) {
          console.log(err);
        }
        if (
          isAxiosError(err) &&
          (err.response?.status === 400 || err.response?.status === 401)
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
                {cteRec.map((cte: cteReceive) => (
                  <tr key={cte.id} className="table-body-row">
                    <td className="details-body">{`${cte.quantity} ${cte.unitOfMeasure}`}</td>
                    <td className="details-body">{cte.foodDesc}</td>
                    <td className="details-body">{cte.locationId}</td>
                    <td className="details-body">{cte.receiveDate}</td>
                    <td className="details-body">
                      <button className="action-btn">View</button>
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
    </div>
  );
};

export default Transformation;
