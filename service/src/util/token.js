import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
    return jwt.sign({
        id: userId
    }, process.env.SECRET_KEY || "sky",
        { expiresIn: "1d" }
    );
}

