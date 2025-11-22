import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DoughnutManBg from "../assets/login2.jpg";
import { login } from "../Api/api";

function Login() {
    const [userName, setUserName] = useState(""); // optional
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [shake, setShake] = useState(false);

    const navigate = useNavigate();

    const handleLoginUser = async (e) => {
        e.preventDefault();

        // simple client-side validation
        if (!email.trim() || !password.trim()) {
            toast.error("Please enter email and password");
            triggerShake();
            return;
        }

        setLoading(true);
        try {
            const data = { email, password };
            const result = await login(data);

            const token = result?.token;
            const user = result?.user;

            if (token) {
                // store token + optional user
                localStorage.setItem("token", token);
                if (user) localStorage.setItem("user", JSON.stringify(user));
                toast.success("Login successful");
            } else {
                toast.error("No token received from server");
                triggerShake();
                setLoading(false);
                return;
            }

            // small delay so toast can show before navigation
            setTimeout(() => navigate("/home"), 600);
        } catch (error) {
            console.error("Login error:", error);
            // try to show message from backend if available
            const msg = error?.message || error?.data || "Login failed. Check credentials.";
            toast.error(msg);
            triggerShake();
            setLoading(false);
        }
    };

    const triggerShake = () => {
        setShake(true);
        setTimeout(() => setShake(false), 500);
    };

    return (
        <div
            className="min-h-screen flex justify-center items-center bg-cover bg-center bg-fixed relative"
            style={{ backgroundImage: `url(${DoughnutManBg})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

            {/* Animated Login Card */}
            <motion.form
                onSubmit={handleLoginUser}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`
                    relative w-full max-w-sm
                    bg-white/10 backdrop-blur-xl
                    p-6 rounded-3xl shadow-xl border border-white/20
                    space-y-5 z-10
                    hover:shadow-orange-500/40 hover:border-orange-400/40
                    transition-all duration-500
                    ${shake ? "shake" : ""}
                `}
            >
                <ToastContainer position="top-right" />

                {/* Heading Animation */}
                <motion.h2
                    initial={{ y: -15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-3xl font-bold text-center text-white drop-shadow-xl"
                >
                    Welcome Back
                </motion.h2>

                {/* Username (optional) */}
                <InputAnimated
                    label="Username (optional)"
                    id="userName"
                    value={userName}
                    setValue={setUserName}
                    placeholder="Enter your username"
                    delay={0.15}
                />

                {/* Email */}
                <InputAnimated
                    label="Email"
                    id="email"
                    value={email}
                    type="email"
                    setValue={setEmail}
                    placeholder="Enter your email"
                    delay={0.25}
                />

                {/* Password */}
                <InputAnimated
                    label="Password"
                    id="password"
                    value={password}
                    type="password"
                    setValue={setPassword}
                    placeholder="Enter your password"
                    delay={0.35}
                />

                {/* Login Button */}
                <motion.button
                    whileHover={{ scale: loading ? 1 : 1.05, boxShadow: loading ? "none" : "0 0 20px #fb923c" }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={loading}
                    className={`w-full bg-gradient-to-r from-orange-500 to-red-600
                    text-white py-3 rounded-xl font-semibold text-lg shadow-lg
                    hover:shadow-orange-400/40 duration-300 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                    {loading ? "Logging in..." : "Log In"}
                </motion.button>

                {/* Signup Redirect */}
                <p className="text-center text-gray-300 text-sm">
                    New here?{" "}
                    <Link to="/signup" className="text-orange-400 font-semibold hover:underline">
                        Create Account
                    </Link>
                </p>
            </motion.form>

            {/* Shake + animations */}
            <style>
                {`
                .shake {
                    animation: shakeAnim 0.45s ease-in-out;
                }
                @keyframes shakeAnim {
                    0% { transform: translateX(0px); }
                    20% { transform: translateX(-6px); }
                    40% { transform: translateX(6px); }
                    60% { transform: translateX(-4px); }
                    80% { transform: translateX(4px); }
                    100% { transform: translateX(0px); }
                }
                `}
            </style>
        </div>
    );
}

/* Reusable Animated Input Component */
function InputAnimated({
    label,
    id,
    value,
    type = "text",
    setValue,
    placeholder,
    delay,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.45 }}
            className="group"
        >
            <label htmlFor={id} className="block mb-1 text-gray-300 text-sm">
                {label}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                className="
                    w-full p-2.5 bg-gray-900 border border-gray-700 
                    rounded-lg text-white placeholder-gray-500 
                    focus:ring-2 focus:ring-orange-500
                "
                required={id !== "userName"}
                autoComplete={id === "email" ? "email" : "off"}
            />
        </motion.div>
    );
}

export default Login;
