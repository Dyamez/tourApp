import express from "express";
import {
  createHotel,
  deleteHotel,
  getSingleHotel,
  getAllHotels,
  updateHotel,
  getHotelBySearch,
  getFeaturedHotel,
  getHotelCount,
} from "../controllers/HotelController.js";
//import { verifyAdmin } from '../utilites/verifyToken.js'

const router = express.Router();

// CREATE
router.post("/", createHotel);

// UPDATE
router.put("/:id", updateHotel);

// DELETE
router.delete("/:id", deleteHotel);

// GET
router.get("/:id", getSingleHotel);

// GET ALL
router.get("/", getAllHotels);

router.get("/search/getHotelBySearch", getHotelBySearch);

router.get("/getFeaturedHotel", getFeaturedHotel);

router.get("/search/getHotelCount", getHotelCount);

export default router;
