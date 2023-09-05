import express from "express";
import {
  deletePerson,
  updatePerson,
  getSinglePerson,
  getAllPerson,
} from "../controllers/personController.js";
const router = express.Router();

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

router.get("/:id", getSinglePerson);

router.get("/", getAllPerson);

export default router;
