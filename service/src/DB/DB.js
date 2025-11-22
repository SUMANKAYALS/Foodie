import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB is Connected");
    } catch (error) {
        console.error("❌ Internal Server Error:", error.message);
        throw error;
    }
};
