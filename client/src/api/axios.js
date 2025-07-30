// axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1", // ✅ MUST MATCH BACKEND
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
