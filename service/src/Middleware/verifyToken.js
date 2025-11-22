import jwt from "jsonwebtoken";
import User from "../Model/user.model.js"

export const authMiddleware = async (req, res, next) => {
    try {
        let token = req.cookies.token || req.headers.authorization.split(" ")[1];

        // If token is not in cookie, check Authorization header
        // if (!token && req.headers.authorization) {
        //     token = req.headers.authorization.split(" ")[1]; // Remove Bearer
        // }
        if (!token) return res.status(401).json({ message: "Unauthorized" });
        const decoded = jwt.verify(token, process.env.SECRET_KEY || "sky");
        const UserId = decoded.id;
        const user = await User.findById(UserId);
        if (!user) {
            return res.status(401).json({ message: "Session expired. Please log in again." });
        }
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Auth error:", error);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}