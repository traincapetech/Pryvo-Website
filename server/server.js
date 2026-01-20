import express from "express";
import dotenv from "dotenv";
import cors from 'cors'
import connectDB from "./CONFIG/db.js";
import { router } from "./Routes/NewsletterRoutes.js";
import { adminRoutes }from "./Routes/AdminRoutes.js";
import { adminSubscription }from "./Routes/AdminSubscription.js";

dotenv.config();


const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect DB
connectDB();

  
// routes
app.use("/api/newsletter", router);
app.use("/api/admin", adminRoutes);
app.use("/api/admin/subscriptions", adminSubscription);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);  