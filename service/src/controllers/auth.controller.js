import User from "../Model/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../util/token.js";
import jwt from "jsonwebtoken"
import { generateOtp, sendEmail } from "../Utility/sendEmail.js";

export const signup = async (req, res) => {
    try {
        const { userName, email, password, state, district, landmark } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const otp = generateOtp();
        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);
        // Create new user
        const newUser = new User({
            userName,
            email,
            password,
            state,
            district,
            landmark,
            isVerified: false,
            verificationToken: otp,
            verificationExpires: otpExpiry
        });

        // Save to database
        const savedUser = await newUser.save();
        // Send OTP Email
        await sendEmail(email, "Foodie Email Verification OTP ", otp);
        return res.status(201).json({
            message: "send otp",
        });

    } catch (error) {
        console.log("Error:", error);
        return res.status(500).json({ message: "Something went wrong ❗" });
    }
};

// export const Login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.state(400).json({ message: "Invalid credentials" });
//         }
//         const chackPassword = bcrypt.compare(password, user.password);
//         if (!chackPassword) res.state(400).json({ message: "Invalid credentials" });
//         const token = generateToken(user._id.toString());
//         res.cookie("token", token, {
//             httpOnly: true,
//             secure: false,
//             sameSite: "lax",
//             maxAge: 24 * 60 * 60 * 1000 // 1 day
//         });
//         res.status(201).json({ message: "Login successful", token, user });
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ error: "Server error" });
//     }
// }

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // FIXED: send only the raw string ID
        const token = generateToken(user._id.toString());

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        res.status(200).json({
            message: "Login successful",
            token,
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error" });
    }
};

export const logout = async (req, res) => {
    try {
        const token = req.cookies?.token;
        if (!token) return res.status(400).json({ message: "No Active Session" });
        const decoded = jwt.verify(token, process.env.SECRET_KEY || "sky");
        if (!decoded.id) return res.status(400).json({ message: "Invalid token" });
        const user = await User.findById(decoded.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
        })

        return res.json({ message: "Logout successful" });
    } catch (error) {
        return res.status(500).json({ message: "Error during logout", error });
    }
}


// VERIFY OTP
export const verifyEmail = async (req, res) => {
    try {
        const { email, otp } = req.body;   // 🔥 CHANGED (was verificationToken)

        const user = await User.findOne({ email });
        if (!user)
            return res.status(400).json({ message: "User not found" });

        // match OTP + check expiry
        if (
            user.verificationToken !== otp ||           // 🔥 CHANGED
            !user.verificationExpires ||
            user.verificationExpires < Date.now()
        ) {
            return res.status(400).json({ message: "Invalid or expired OTP" });
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationExpires = undefined;

        await user.save();

        return res.json({ message: "Email verified successfully!" });

    } catch (error) {
        console.log("Verification Error:", error);
        return res.status(500).json({ message: "Server error" });
    }
};


// RESEND OTP
export const resendOTP = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });
        if (!user)
            return res.status(400).json({ message: "User not found" });

        const otp = generateOtp();
        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

        user.verificationToken = otp;
        user.verificationExpires = otpExpiry;

        await user.save();
        await sendEmail(email, "Foodie Account: New OTP", otp);

        return res.json({ message: "New OTP sent successfully!" });

    } catch (error) {
        console.log("Resend OTP Error:", error);
        res.status(500).json({ message: "Error resending OTP" });
    }
};





