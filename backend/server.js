import express from "express";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
const app = express();
dotenv.config();
app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 5000;
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
