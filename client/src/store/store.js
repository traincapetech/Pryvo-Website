import { create } from "zustand";
import { newsletterAPI } from "../api/api";
import toast from 'react-hot-toast';
export const useStore = create((set) => ({
    // Newsletter
  subscribing: false,
  subscribers: [],
  subject: "",
  message: "",
  sending: false,
  setSubscribing: (subscribing) => set({ subscribing }),
  setSubscribers: (subscribers) => set({ subscribers }),
  setSubject: (subject) => set({ subject }),
  setMessage: (message) => set({ message }),
  setSending: (sending) => set({ sending }),

  subscribe: async (email) => {
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }
    // Basic validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    set({ subscribing: true });
    try {
      await newsletterAPI.subscribe(email);
      toast.success("Subscribed successfully!");
      set({ subscribing: false });
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message ||
          "Subscription failed. Please try again."
      );
    } finally {
      set({ subscribing: false });
    }
  },

  fetchSubscribers: async () => {
    set({ loading: true });
    try {
      const res = await newsletterAPI.getSubscribers();
      set({ subscribers: res.data.subscribers || [] });
    } catch (error) {
      console.error("Failed to fetch subscribers:", error);
      toast.error("Failed to fetch subscribers");
      set({ subscribers: [] });
    } finally {
      set({ loading: false });
    }
  },

  sendSubscribers: async (subject, message) => {
    try {
      set({ sending: true });
      const res = await newsletterAPI.sendNewsletter({
        subject,
        html: message.replace(/\n/g, "<br>"), // Simple newline to BR conversion
      });
      toast.success(res.data.message);
      set({ subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send newsletter:", error);
      toast.error("Failed to send newsletter");
    } finally {
      set({ sending: false });
    }
  },

  unSubscribe: async (email) => {
    try {
      await newsletterAPI.unsubscribe(email);
      toast.success("Unsubscribed successfully!");
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message ||
          "Unsubscription failed. Please try again."
      );
    }
  },

}))