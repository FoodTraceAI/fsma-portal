import { useRef, useState, useEffect } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import "./Login.css";

const LOGIN_URL = "/auth/login";

const Login = () => {
  const authContext = useAuth();
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }
  const { setAuth } = authContext;
  const emailRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  useEffect(() => {
    setErr("");
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // navigate("/dashboard");
    try {
      const res = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(JSON.stringify(res.data));
      const accessToken = res?.data?.accessToken;
      const refreshToken = res?.data?.refreshToken;

      setAuth({ email, password, accessToken, refreshToken });
      setEmail("");
      setPassword("");
      navigate("/dashboard");
    } catch (err) {
      const error = err as AxiosError;
      if (!error.response) {
        setErr("Network error. Please try again later.");
      } else if (error.response.status === 400) {
        setErr("Invalid email or password.");
      } else if (error.response.status === 401) {
        setErr("Unauthorized.");
      } else {
        setErr("Login failed");
      }

      errRef.current?.focus();
    }
  };

  return (
    <div className="login">
      <section>
        <div className="form-container">
          <p
            ref={errRef}
            className={err ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {err}
          </p>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button>Login</button>
            {/* <p>Don't have an account? <a href="/register" id="reg-link">Register</a></p> */}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
