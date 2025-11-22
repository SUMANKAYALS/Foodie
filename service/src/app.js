import dotenv from "dotenv";
dotenv.config(); // MUST COME FIRST

import express from "express";
import { dbConnection } from "./DB/DB.js";
import authRouter from "./Routers/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import Message from "./Routers/Message.route.js";
import orderRout from "./Routers/Order.route.js";

const PORT = process.env.PORT || 3000;

const app = express();

// 👉 1) JSON parser FIRST (VERY IMPORTANT)
app.use(express.json());

// 👉 2) Cookie parser
app.use(cookieParser());

// 👉 3) CORS AFTER json() and cookieParser()
app.use(
    cors({
        origin: process.env.FRONT_END_URL || "http://localhost:5173",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// Optional: Allow credentials header
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get("/test", (req, res) => {
    res.status(200).send("This is the API test check");
});

// Routes
app.use("/api/auth", authRouter);
app.use("/api/Message", Message);
app.use("/api/Order", orderRout);

// Start server
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    dbConnection();
});
