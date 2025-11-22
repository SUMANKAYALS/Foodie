import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import BgImage from "../assets/privacy-bg.jpg"; // Add your image here

function PrivacyPage() {
    return (
        <div className="relative min-h-screen text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center -z-10"
                style={{ backgroundImage: `url(${BgImage})` }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 -z-10"></div>

            <Navbar /><br />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-4xl mx-auto p-6 py-16"
            >
                <h1 className="text-5xl font-extrabold text-orange-500 text-center mb-12">
                    Privacy Policy
                </h1>

                {/* MAIN CONTENT */}
                <div className="space-y-10 bg-gray-900/70 p-8 rounded-2xl border border-gray-700 shadow-xl backdrop-blur-md">

                    {/* Section 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-orange-400 mb-3">1. Introduction</h2>
                        <p className="text-gray-300">
                            We value your privacy. This Privacy Policy explains how we collect,
                            use, store, and protect your information when you use our services.
                        </p>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h2 className="text-2xl font-bold text-orange-400 mb-3">2. Information We Collect</h2>
                        <p className="text-gray-300 mb-2">We collect the following types of information:</p>
                        <ul className="list-disc list-inside text-gray-400 space-y-1">
                            <li>Name and email address</li>
                            <li>Profile details (avatar, preferences)</li>
                            <li>Device and usage information</li>
                            <li>Address details (state, district, landmark)</li>
                        </ul>
                    </motion.div>

                    {/* Section 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold text-orange-400 mb-3">3. How We Use Your Information</h2>
                        <ul className="list-disc list-inside text-gray-400 space-y-1">
                            <li>To personalize your experience</li>
                            <li>To improve app features and stability</li>
                            <li>To communicate updates and important alerts</li>
                            <li>To provide customer support</li>
                        </ul>
                    </motion.div>

                    {/* Section 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h2 className="text-2xl font-bold text-orange-400 mb-3">4. How We Protect Your Data</h2>
                        <p className="text-gray-300">
                            We use industry-standard encryption, secure servers, and strict data
                            handling policies to ensure your information remains safe.
                        </p>
                    </motion.div>

                    {/* Section 5 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2 className="text-2xl font-bold text-orange-400 mb-3">5. Sharing Your Information</h2>
                        <p className="text-gray-300">
                            We DO NOT share or sell your personal information to third parties.
                            We only share data when required by law or with your explicit consent.
                        </p>
                    </motion.div>

                    {/* Section 6 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-orange-400 mb-3">6. Your Rights</h2>
                        <ul className="list-disc list-inside text-gray-400 space-y-1">
                            <li>Access and update your data</li>
                            <li>Request deletion of your account</li>
                            <li>Disable certain permissions</li>
                        </ul>
                    </motion.div>

                    {/* Section 7 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-orange-400 mb-3">7. Contact Us</h2>
                        <p className="text-gray-300">
                            If you have any questions about this Privacy Policy, feel free to reach us at:
                        </p>

                        <p className="text-orange-400 font-semibold mt-1">
                            suman13kayal@gmail.com
                        </p>
                    </motion.div>

                </div>
            </motion.div>

            <Footer />
        </div>
    );
}

export default PrivacyPage;
