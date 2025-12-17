import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
import foodRouter from "./routes/foodroute.js";
import path from "path";



// Load env variables at the very top
dotenv.config();



const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

//api end points .
//first we create for api endspoint for foodRoute .

app.use("/api/food",foodRouter)
app.use("/images", express.static(path.join(process.cwd(), "uploads")));



// Test route
app.get("/", (req, res) => {
  res.send("API working ");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
