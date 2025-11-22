import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


export const sendEmail = async (email, subject, otp) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER || "suman13kayal@gmail.com",
                pass: process.env.SMTP_PASS || "mnkschhpwczcwumb",
            },
        });
        await transporter.sendMail({
            from: `"Foodie" <${process.env.SMTP_USER}>`,
            to: email,
            subject: subject,
            html: `<h2> Your ${subject} is : <b><i>${otp}</i></b></h2><p>Valid for 5 minutes.</p>`
        });

        console.log("Verification email sent!");
    } catch (error) {
        console.error("Email sending failed:", error);
    }
};

// generate OTP 
export const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();
