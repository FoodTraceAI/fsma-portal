import { useState, useEffect } from "react";
import axios from "../../api/axios";
import useRefreshToken from "../../hooks/useRefreshToken";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const auth = useAuth().auth;

  const refresh = useRefreshToken();
  const [sheet, setSheet] = useState<[]>();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getSheet = async () => {
      try {
        console.log(auth?.accessToken, "accessToken");
        const res = await axios.get("/sheet", {
          headers: { Authorization: `Bearer ${auth?.accessToken}` },
          signal: controller.signal,
        });
        console.log(res.data);
        if (isMounted) {
          setSheet(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getSheet();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [auth?.accessToken]);

  return (
    <article>
      <h1>Dashboard</h1>
      {sheet?.length ? (
        <ul>
          {sheet.map((items: object, i: number) => (
            <li key={i}>{JSON.stringify(items)}</li>
          ))}
        </ul>
      ) : (
        <p>No data</p>
      )}
      <button onClick={() => refresh()}>Refresh</button>
    </article>
  );
};

export default Dashboard;
