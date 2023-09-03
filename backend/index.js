import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import eventRoute from "./routes/events.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
/*
app.get("/", (req, res) => {
  res.send("Everything is Awesome!");
});
*/

mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Accessed MongoDB");
  } catch (error) {
    console.log("connection denied");
  }
};

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/events", eventRoute);

app.listen(port, () => {
  connect();
  console.log("successful connection", port);
});
