import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    (`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    ("MongoDB connection error:", error);
  }
};
