import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import rooomsRoute from "./routes/rooms.js";



dotenv.config();
const app = express();
const port = process.env.PORT || 8000;


app.get("/", (req, res) => {
  res.send("Hello World!");
});


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

//MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", rooomsRoute);

app.use((err, req, res, next ) => {
  const errorStatus = err.status || 500
  const errorMessage = err.Message || 'Something went wrong!'
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})

app.listen(port, () => {
  connect();
  console.log("successful connection", port);
});
