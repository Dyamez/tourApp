import express from "express";
import {
  createBooking,
  getAllBooking,
  getBooking,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/:id", getBooking);
router.get("/", getAllBooking);

export default router;
