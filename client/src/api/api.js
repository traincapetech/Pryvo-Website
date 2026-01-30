import axios from "axios";

export const api = axios.create({
  baseURL: "https://dating-app-backend-19lb.onrender.com/api",
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers['x-admin-token'] = token;
  }
  return config;
});

export const newsletterAPI = {
  subscribe: (email, source) => api.post("/newsletter/subscribe", { email, source }),
  unsubscribe: (email) => api.post("/newsletter/unsubscribe", { email }),
  getSubscribers: () => api.get("/newsletter"),
  sendNewsletter: (data) => api.post("/newsletter/send", data),
};

export const Users = {
  getUsers: () => api.get("/admin/users"),
  suspendUsers: (userId) => api.post(`/admin/users/${userId}/suspend`),
  activeUsers: (userId) => api.post(`/admin/users/${userId}/activate`),
  deleteUser: (userId) => api.delete(`/admin/users/${userId}`)
}

export const Subscription ={
  getSubscribers: () => api.get("/admin/subscriptions"),
}

export const openpopup = {
  getopenpopup: () => api.get('/admin/users'),
}

export const adminAnalytics = {
  getAnalytics: () => api.get('/admin/dashboard/analytics'),
}