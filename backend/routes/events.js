import express from "express";
import {
  createEvent,
  updateEvent,
  deleteEvent,
  getSingleEvent,
  getAllEvent,
  getEventBySearch,
  getFeaturedEvent,
  getEventCount,
} from "../controllers/EventController.js";

const router = express.Router();

router.post("/", createEvent);

router.put("/:id", updateEvent);

router.delete("/:id", deleteEvent);

router.get("/:id", getSingleEvent);

router.get("/", getAllEvent);

router.get("/search/getEventBySearch", getEventBySearch);

router.get("/search/getFeaturedEvent", getFeaturedEvent);

router.get("/search/getEventCount", getEventCount);

export default router;

/*
deleteEvent,
  getAllEvent,
  getFeaturedEvent,
  getSingleEvent,
  getEventBySearch,
  getEventCount,
  updateEvent,
  */
