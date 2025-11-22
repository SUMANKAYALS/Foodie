import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB || "mongodb://127.0.0.1:27017/ResturentDB");
        console.log("DB is Connected")
    } catch (error) {
        console.log("Internal server Error❗");
        throw error;
    }
}