import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import BgImage from "../assets/profile-bg.jpg";
import DEFAULT_AVATAR from "../assets/boy.png";

function ProfilePage() {
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        avatar: "",
    });

    const [savedProfile, setSavedProfile] = useState(null);

    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem("userProfile"));
        if (storedProfile) {
            setProfile(storedProfile);
            setSavedProfile(storedProfile);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem("userProfile", JSON.stringify(profile));
        setSavedProfile(profile);
        toast.success("Profile updated successfully!", { autoClose: 2000 });
    };

    const handleReset = () => {
        localStorage.removeItem("userProfile");
        const emptyProfile = { name: "", email: "", avatar: "" };
        setProfile(emptyProfile);
        setSavedProfile(emptyProfile);
        toast.info("Profile reset!", { autoClose: 2000 });
    };

    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    const hasChanges =
        JSON.stringify(profile) !== JSON.stringify(savedProfile);

    return (
        <div className="relative min-h-screen text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center -z-10"
                style={{ backgroundImage: `url(${BgImage})` }}
            ></div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70 -z-10"></div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <br /><br />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex-1 w-full max-w-5xl mx-auto p-6 sm:p-8 py-20"
                >
                    <h1 className="text-5xl font-extrabold text-orange-500 mb-8 text-center animate-pulse">
                        My Profile
                    </h1>

                    <motion.form
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        onSubmit={handleSave}
                        className="bg-gray-800/70 p-8 sm:p-10 rounded-2xl shadow-xl backdrop-blur-sm 
                        w-full max-w-3xl mx-auto border border-gray-700"
                    >
                        {/* Avatar */}
                        <div className="flex flex-col items-center mb-6">
                            <img
                                src={
                                    isValidUrl(profile.avatar)
                                        ? profile.avatar
                                        : DEFAULT_AVATAR
                                }
                                alt="Avatar"
                                className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-orange-500 shadow-lg"
                            />
                            <input
                                type="url"
                                name="avatar"
                                value={profile.avatar}
                                onChange={handleChange}
                                placeholder="Avatar URL (optional)"
                                className="w-full p-4 rounded-lg bg-gray-700 text-white border border-orange-500 
                                focus:outline-none focus:border-orange-400"
                            />
                        </div>

                        {/* Name */}
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="block mb-2 font-semibold"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full p-4 rounded-lg bg-gray-700 text-white border border-orange-500 
                                focus:outline-none focus:border-orange-400"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-8">
                            <label
                                htmlFor="email"
                                className="block mb-2 font-semibold"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full p-4 rounded-lg bg-gray-700 text-white border border-orange-500 
                                focus:outline-none focus:border-orange-400"
                                required
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col gap-4">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={!hasChanges}
                                className={`w-full py-3 rounded-lg font-semibold transition-all shadow-lg ${hasChanges
                                    ? "bg-orange-600 hover:bg-orange-700 text-white"
                                    : "bg-gray-600 cursor-not-allowed text-gray-300"
                                    }`}
                            >
                                Save Profile
                            </motion.button>

                            <motion.button
                                type="button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleReset}
                                className="w-full bg-gray-600 hover:bg-gray-700 py-3 rounded-lg text-white font-semibold transition-all shadow-lg"
                            >
                                Reset Profile
                            </motion.button>
                        </div>
                    </motion.form>
                </motion.div>

                <Footer />
                <ToastContainer position="top-right" />
            </div>
        </div>
    );
}

export default ProfilePage;
