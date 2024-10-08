import { createContext, useState, ReactNode } from "react";
import { AuthState } from "../types/types";


const defaultAuth = {
  email: "",
  password: "",
  accessToken: "",
  refreshToken: "",
};

interface AuthContextType {
  auth: AuthState;
  setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
}

/* This code snippet is creating a context in React using the `createContext` function. The
`createContext` function is used to create a context object, which consists of two parts: the
context itself and a provider component. */
const AuthContext = createContext<AuthContextType>({
  auth: defaultAuth,
  setAuth: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<AuthState>(defaultAuth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
