import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { User } from "./model/user.model";
import userRoute from "./route/user.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/user", userRoute);

mongoose
  .connect(MONGODB_URI!)
  .then(async () => {
    console.log("connected to database");
    await User.init();
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("database connection failed:", err);
    process.exit(1);
  });
