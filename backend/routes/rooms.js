import express from "express";
import {
  createRoom,
  deleteRoom,
  updateRoom,
  updateRoomAvailability,
  getRoom,
  getRooms,
} from "../controllers/RoomController.js";
import { verifyAdmin } from "../utilities/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getRooms);

export default router;
