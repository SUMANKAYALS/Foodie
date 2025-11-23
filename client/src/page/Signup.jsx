import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import DoughnutManBg from "../assets/login2.jpg";
import { stateDistricts } from "../Api/Sampleproducts.js"
import { signup } from "../Api/api.js";


function Signup() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState("");
    const [district, setDistrict] = useState("");
    const [landmark, setLandmark] = useState("");
    const navigate = useNavigate();

    const handleSignupUser = async (e) => {
        e.preventDefault();
        try {
            const data = {
                userName,
                email,
                password,
                state,
                district,
                landmark
            }
            const result = await signup(data);
            // If backend says user exists → redirect to login page
            if (result?.exists) {
                navigate("/login");
                return;
            }
            navigate("/verify-otp", { state: { email } });
        } catch (error) {
            console.error("Registration Error:", error);
        }
    };

    return (
        <div
            className="min-h-screen flex justify-center items-center bg-cover bg-center bg-fixed relative"
            style={{ backgroundImage: `url(${DoughnutManBg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

            {/* Compact Signup Card */}
            <motion.form
                onSubmit={handleSignupUser}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="
                    relative w-full max-w-sm      /* 🔥 Highly decreased width */
                    bg-white/10 backdrop-blur-xl
                    p-6                              /* 🔥 smaller padding */
                    rounded-3xl shadow-xl border border-white/20
                    space-y-4                        /* 🔥 reduced spacing */
                    z-10
                    hover:shadow-orange-600/40 hover:border-orange-400/40 
                    transition-all duration-500
                "
            >
                {/* Heading */}
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-2xl font-bold text-center text-white drop-shadow-xl"
                >
                    Create Account
                </motion.h2>

                {/* Username */}
                <InputWithAnimation
                    label="Username"
                    value={userName}
                    placeholder="Enter username"
                    onChange={(e) => setUserName(e.target.value)}
                    delay={0.2}
                />

                {/* Email */}
                <InputWithAnimation
                    label="Email"
                    type="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    delay={0.3}
                />

                {/* Password */}
                <InputWithAnimation
                    label="Password"
                    type="password"
                    value={password}
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    delay={0.4}
                />

                {/* State Selector */}
                <SelectWithAnimation
                    label="State"
                    value={state}
                    delay={0.5}
                    onChange={(e) => {
                        setState(e.target.value);
                        setDistrict("");
                    }}
                    options={Object.keys(stateDistricts)}
                />

                {/* District Selector */}
                <SelectWithAnimation
                    label="District"
                    value={district}
                    delay={0.6}
                    onChange={(e) => setDistrict(e.target.value)}
                    options={state ? stateDistricts[state] : []}
                    disabled={!state}
                />

                {/* Landmark */}
                <InputWithAnimation
                    label="Landmark"
                    value={landmark}
                    placeholder="Near ABC Hospital..."
                    onChange={(e) => setLandmark(e.target.value)}
                    delay={0.7}
                />

                {/* Submit Button */}
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px #fb923c" }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full py-2.5 bg-gradient-to-r from-orange-500 to-red-600 
                    text-white rounded-xl text-lg font-semibold shadow-lg 
                    hover:shadow-orange-400/40 duration-300"
                >
                    Sign Up
                </motion.button>

                {/* Login Link */}
                <p className="text-center text-gray-300 text-sm">
                    Already have an account?{" "}
                    <Link className="text-orange-400 font-semibold hover:underline" to="/login">
                        Login
                    </Link>
                </p>
            </motion.form>
        </div>
    );
}

/* Compact Animated Input Component */
function InputWithAnimation({ label, type = "text", value, placeholder, onChange, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.5 }}
        >
            <label className="block text-gray-300 mb-1 text-sm">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full p-2.5 bg-gray-900 border border-gray-700 rounded-lg
                text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500"
                required
            />
        </motion.div>
    );
}

/* Compact Animated Select Component */
function SelectWithAnimation({ label, value, onChange, options, disabled, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.5 }}
        >
            <label className="block text-gray-300 mb-1 text-sm">{label}</label>
            <select
                value={value}
                onChange={onChange}
                disabled={disabled}
                className="w-full p-2.5 bg-gray-900 border border-gray-700 rounded-lg
                text-gray-200 focus:ring-2 focus:ring-orange-500 disabled:bg-gray-800"
                required
            >
                <option value="">Select {label}</option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </motion.div>
    );
}

export default Signup;
