import express from "express";
import { feedback } from "../controllers/Message.controller.js";

const router = express.Router();

router.post("/userMessage", feedback);

export default router;