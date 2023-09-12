import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import eventRoute from "./routes/events.js";
import personRoute from "./routes/persons.js";
import logRoute from "./routes/log.js";
import bookingRoute from "./routes/book.js";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import rooomsRoute from "./routes/rooms.js";
import reviewRoute from "./routes/reviews.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 6000;
const corsOptions = {
  origin: true,
  credentials: false,
};
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

    console.log("Mongoloid!");
  } catch (error) {
    console.log(
      "Make .env on root of /backend, add PORT=???? and MONGO_URI=mongodb+srv://YourCredentials...."
    );
  }
};

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/log", logRoute);
app.use("/events", eventRoute);
app.use("/persons", personRoute);
app.use("/booking", bookingRoute);
app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", rooomsRoute);
app.use("/review", reviewRoute);

app.listen(port, () => {
  connect();
  console.log("successful connection to DataBase", port);
});
