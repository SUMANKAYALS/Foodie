import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { dbConnection } from "./DB/DB.js";
import authRouter from "./Routers/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import Message from "./Routers/Message.route.js";
import orderRout from "./Routers/Order.route.js";

const PORT = process.env.PORT || 3000;
const app = express();

// JSON parser
app.use(express.json());
app.use(cookieParser());

// ✅ FIXED CORS
app.use(
    cors({
        origin: [
            "http://localhost:5173",                 // local frontend
            "https://foodie-pu74.onrender.com",      // deployed frontend (change to your real domain)
        ],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    })
);

// Optional but safe
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// Health check for Render
app.get("/", (req, res) => {
    res.send("Server is running on Render!");
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
    console.log(`Server running on port: ${PORT}`);
    dbConnection();
});
