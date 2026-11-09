import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"

dotenv.config()

const app = express()
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI 

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("database connection failed:", err);
    process.exit(1);
  });