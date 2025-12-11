import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // just pass URI
    console.log(" DB Connected");
  } catch (error) {
    console.log(" DB Connection Failed:", error.message);
    process.exit(1); // exit process if DB connection fails
  }
};
