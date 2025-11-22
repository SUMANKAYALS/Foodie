import express from "express";
import { dbConnection } from "./DB/DB.js";
import dotenv from "dotenv";
import authRouter from "./Routers/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import Message from "./Routers/Message.route.js"
import orderRout from "./Routers/Order.route.js"
const PORT = process.env.PORT || 3000;

dotenv.config();
const app = express();
app.use(
    cors({
        origin: process.env.FRONT_END_URL || "http://localhost:5173",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

// ⭐ Needed for all responses
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.use(express.json());
app.use(cookieParser());
app.get("/test", (req, res) => {
    res.status(201).send("this the api test chack");
});

app.use("/api/auth", authRouter);
app.use("/api/Message", Message);
app.use("/api/Order", orderRout);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    dbConnection()
})