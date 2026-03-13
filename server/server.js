import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import projectRoutes from "./routes/projectRoutes.js";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Portfolio API running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});