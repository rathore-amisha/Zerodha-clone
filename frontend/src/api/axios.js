import axios from "axios";

// Base URL of the Backend API. Set REACT_APP_API_URL in frontend/.env
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3002",
  withCredentials: true, // send/receive the httpOnly auth cookie
});

export default api;
