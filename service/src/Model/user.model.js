import mongoose from "mongoose";
import bcrypt from "bcrypt";
const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true
    },
    // 🟢 Email Verification fields
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String
    },
    verificationExpires: {
        type: Date
    }
})
UserSchema.pre("save", async function (next) {
    // Only hash password if modified or new
    if (!this.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
})
const UserModel = mongoose.model("user", UserSchema);

export default UserModel;