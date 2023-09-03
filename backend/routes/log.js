import express from "express";
import { login, registration } from "./../controllers/logController.js";

const router = express.Router();

router.post("/register", registration);
router.post("/login", login);

export default router;
