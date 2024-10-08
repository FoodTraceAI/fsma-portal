import axios from "axios";

/* This code snippet is creating an Axios instance with a base URL of "http://localhost:8080/api/v1"
and exporting it as the default export of the module. This allows other parts of the codebase to
import this Axios instance and use it to make HTTP requests to the specified base URL. */
export default axios.create({
  baseURL: "http://localhost:8080/api/v1",
});
