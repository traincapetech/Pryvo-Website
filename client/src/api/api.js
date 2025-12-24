import axios from "axios";

// Create axios instance with default configuration
const api = axios.create({
  baseURL:
    "http://localhost:8080/api",
  timeout: 10000, // 10 second timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export const newsletterAPI = {
  subscribe: (email) => api.post("/newsletter/subscribe", { email }),
  unsubscribe: (email) => api.post("/newsletter/unsubscribe", { email }),
  getSubscribers: () => api.get("/newsletter"),
  sendNewsletter: (data) => api.post("/newsletter/send", data),
};