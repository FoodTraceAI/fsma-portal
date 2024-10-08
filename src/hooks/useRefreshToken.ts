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

    /* The `setAuth` function is being called with a callback function that takes the previous
    `AuthState` as an argument and returns a new `AuthState` object. Inside the callback function:
    1. The spread operator `...prev` is used to copy all the properties from the previous
    `AuthState` object.
    2. The `accessToken` property is updated with the `accessToken` value from the response data
    (`res.data.accessToken`).
    3. The `refreshToken` property is updated with the `refreshToken` value from the response data
    (`res.data.refreshToken`).
    4. Finally, the new `AuthState` object with updated `accessToken` and `refreshToken` properties
    is returned. */
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
