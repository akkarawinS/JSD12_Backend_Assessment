import mongoose from "mongoose";
import { logger } from "../middlewares/logger.js";

export async function connectDB() {
  const uri = process.env.MONGO_DB_URI;

  try {
    await mongoose.connect(uri, { dbName: "jsd12-backend-assessment" });
    logger.info("MongoDB connected");
  } catch (err) {
    logger.error("MongoDB connection error", err);
    throw err;
  }
}