import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1";

/* This code snippet is creating an Axios instance with a base URL of "http://localhost:8080/api/v1"
and exporting it as the default export of the module. This allows other parts of the codebase to
import this Axios instance and use it to make HTTP requests to the specified base URL. */
export default axios.create({
  baseURL: BASE_URL,
});

/* This code snippet is creating a new Axios instance named `axiosPrivate` with a base URL of
"http://localhost:8080/api/v1" and setting the request headers to include "Content-type:
application/json". This instance is configured with specific headers for JSON content type requests. */
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
  // withCredentials: true,
});

export const isAxiosError = axios.isAxiosError;
