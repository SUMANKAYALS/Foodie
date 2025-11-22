import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BgImage from "../assets/profile-bg.jpg"; // Background Image
import { logoutUser } from "../Api/api";

function LogoutPage() {
    const navigate = useNavigate();

    // Clear all data & redirect
    const handleLogout = async () => {
        try {
            await logoutUser();
            localStorage.clear();
            navigate("/login");
        } catch (error) {
            alert("logout faild")
        }
    };

    return (
        <div className="relative min-h-screen text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center -z-10"
                style={{ backgroundImage: `url(${BgImage})` }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 -z-10"></div>

            <Navbar />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto p-6 py-24"
            >
                <motion.h1
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-extrabold text-orange-500 mb-8"
                >
                    Logging Out
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-gray-300 text-lg mb-10"
                >
                    Are you sure you want to logout?
                    You can log back in anytime.
                </motion.p>

                {/* BUTTONS */}
                <div className="flex gap-6">
                    {/* Confirm Logout */}
                    <motion.button
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleLogout}
                        className="bg-orange-600 hover:bg-orange-700 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg"
                    >
                        Yes, Logout
                    </motion.button>

                    {/* Cancel */}
                    <motion.button
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate("/home")}
                        className="bg-gray-600 hover:bg-gray-700 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg"
                    >
                        Cancel
                    </motion.button>
                </div>
            </motion.div>

            <Footer />
        </div>
    );
}

export default LogoutPage;
