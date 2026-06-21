import mongoose from "mongoose";
import { ENV } from "./env.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log(`Server Connected to DB: ${conn.connection.host}`);
  } catch (error) {
    console.log("Server Could Not Connect to DB:", error);
    // process.exit(1);
  }
}

export default connectDB;