import express from "express";
const router = express.Router();
import { updatePerson } from "../controllers/personController.js";

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

router.get("/:id", getSinglePerson);

router.get("/", getAllPerson);

export default router;
