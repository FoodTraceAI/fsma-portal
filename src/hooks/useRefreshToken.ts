import axios from "../api/axios";
import useAuth from "./useAuth";
import { AuthState } from "../types/types";

const useRefreshToken = () => {
  const { auth, setAuth } = useAuth();
  const refreshToken = auth?.refreshToken;

  const refresh = async () => {
    const res = await axios.post(
      "/auth/login",
      { refreshToken },
      // {withCredentials: true}
    );

    console.log(res.data);

    setAuth((prev: AuthState) => {
      // console.log(JSON.stringify(prev));
      // console.log(JSON.stringify(res.data));
      return {
        ...prev,
        accessToken: res?.data?.accessToken,
        refreshToken: res?.data?.refreshToken,
      };
    });
    return res.data;
  };

  return refresh;
};

export default useRefreshToken;
