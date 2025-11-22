import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import BgImage from "../assets/login2.jpg";
import { OtpVerification, resend } from "../Api/api";

function EmailOTPVerify() {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [timer, setTimer] = useState(30);
    const [canResend, setCanResend] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const email = location.state?.email;

    useEffect(() => {
        if (!email) {
            alert("Email not found. Go back and sign up again.");
            navigate("/signup");
        }
    }, []);

    // OTP input change
    const handleChange = (value, index) => {
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    // Submit OTP handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        const finalOtp = otp.join("");

        if (finalOtp.length !== 6) {
            alert("Please enter a 6-digit OTP.");
            return;
        }

        try {
            // const res = await axios.post("http://localhost:3000/api/auth/verify-otp", {
            //     email,
            //     otp: finalOtp
            // });

            const resp = await OtpVerification(email, finalOtp);

            alert("OTP Verified Successfully!");
            navigate("/login");

        } catch (error) {
            alert(error.response?.data?.message || "Invalid OTP");
        }
    };

    // Timer Logic
    useEffect(() => {
        if (timer === 0) {
            setCanResend(true);
            return;
        }

        const countdown = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(countdown);
    }, [timer]);

    // Resend OTP
    const handleResend = async () => {
        if (!canResend) return;

        try {
            // await axios.post("http://localhost:3000/api/auth/resend-otp", {
            //     email
            // });
            await resend(email);

            setOtp(["", "", "", "", "", ""]);
            setTimer(30);
            setCanResend(false);

            alert("New OTP sent!");
        } catch (error) {
            alert("Failed to resend OTP.");
        }
    };

    return (
        <div
            className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative flex justify-center items-center"
            style={{ backgroundImage: `url(${BgImage})` }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-[90%] max-w-md text-center 
                animate-[fadeScale_0.7s_ease-out] text-white">

                <h1 className="text-3xl font-bold mb-3 drop-shadow-lg">
                    Email Verification
                </h1>

                <p className="text-gray-200 mb-6">
                    Enter the 6-digit OTP sent to <b>{email}</b>.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center gap-4 mb-8">
                        {otp.map((val, i) => (
                            <input
                                key={i}
                                id={`otp-${i}`}
                                maxLength="1"
                                value={val}
                                onChange={(e) => handleChange(e.target.value, i)}
                                className="w-12 h-12 text-2xl text-center font-semibold 
                                    bg-white/20 backdrop-blur-md border border-white/30 rounded-xl
                                    focus:outline-none focus:border-orange-500 focus:shadow-lg transition"
                                type="text"
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 py-3 rounded-xl 
                        text-lg font-semibold transition shadow-md"
                    >
                        Verify OTP
                    </button>
                </form>

                <p className="mt-5 text-gray-300">
                    Didn't get the code?{" "}
                    <button
                        disabled={!canResend}
                        onClick={handleResend}
                        className={`font-semibold 
                            ${canResend ? "text-orange-400 hover:underline" : "text-gray-500 cursor-not-allowed"}
                        `}
                    >
                        {canResend ? "Resend OTP" : `Resend in ${timer}s`}
                    </button>
                </p>
            </div>

            <style>
                {`
                @keyframes fadeScale {
                    0% { opacity: 0; transform: scale(0.85); }
                    100% { opacity: 1; transform: scale(1); }
                }
                `}
            </style>
        </div>
    );
}

export default EmailOTPVerify;
