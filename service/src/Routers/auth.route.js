import express from "express";
import { Login, logout, resendOTP, signup, verifyEmail } from "../controllers/auth.controller.js"
import { authMiddleware } from "../Middleware/verifyToken.js";
import User from "../Model/user.model.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", Login);
router.post("/logout", logout);
router.post("/otpverify", verifyEmail);
router.post("/resend-otp", resendOTP);

router.get("/authTest", authMiddleware, async (req, res) => {
    const user = await User.findById(req.user.id);
    res.json(user);
})

export default router;