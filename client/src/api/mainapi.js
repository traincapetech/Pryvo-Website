import axios from "axios";

const mainApi = axios.create({
  baseURL: "https://dating-app-backend-19lb.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default mainApi;
