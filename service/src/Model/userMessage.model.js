import mongoose from "mongoose";

const userMassageSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: false
    },
    Message: {
        type: String,
        required: true
    }
});

const userMessages = mongoose.model("userMessage", userMassageSchema);

export default userMessages;