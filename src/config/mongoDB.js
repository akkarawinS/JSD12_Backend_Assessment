import mongoose from "mongoose";

export async function connectDB() {
  const uri = process.env.MONGO_DB_URI;

  try {
    await mongoose.connect(uri, { dbName: "jsd12-backend-assessment" });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error", err);
    throw err;
  }
}