import axios from "axios";

const api = axios.create({
  baseURL: "https://notes-tvq2.onrender.com/",
  timeout: 10000, // 10 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;