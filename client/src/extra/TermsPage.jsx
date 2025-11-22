import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import BgImage from "../assets/cart-bg.jpg"; // Background image

function TermsPage() {
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

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-4xl mx-auto p-6 py-16"
            >
                <h1 className="text-5xl font-extrabold text-orange-500 text-center mb-12">
                    Terms & Conditions
                </h1>

                <div className="space-y-10 bg-gray-900/70 p-8 rounded-2xl border border-gray-700 shadow-xl backdrop-blur-md">

                    {/* Section 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-orange-400 mb-3">
                            1. Acceptance of Terms
                        </h2>
                        <p className="text-gray-300">
                            By using our services, you agree to follow our Terms and Conditions.
                            If you do not agree, please discontinue using the application.
                        </p>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h2 className="text-2xl font-bold text-orange-400 mb-3">
                            2. User Responsibilities
                        </h2>
                        <ul className="list-disc list-inside text-gray-400 space-y-1">
                            <li>Provide accurate and updated information</li>
                            <li>Do not misuse or hack the platform</li>
                            <li>Maintain the confidentiality of login details</li>
                            <li>Use the app according to applicable laws</li>
                        </ul>
                    </motion.div>

                    {/* Section 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold text-orange-400 mb-3">
                            3. Prohibited Activities
                        </h2>
                        <p className="text-gray-300 mb-2">Users are restricted from:</p>
                        <ul className="list-disc list-inside text-gray-400 space-y-1">
                            <li>Sharing harmful or abusive content</li>
                            <li>Attempting unauthorized access to servers</li>
                            <li>Using the service for fraudulent activities</li>
                        </ul>
                    </motion.div>

                    {/* Section 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h2 className="text-2xl font-bold text-orange-400 mb-3">
                            4. Data Usage & Security
                        </h2>
                        <p className="text-gray-300">
                            We store your data securely using encryption, strict access control, and
                            protective measures compliant with industry standards.
                        </p>
                    </motion.div>

                    {/* Section 5 */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h2 className="text-2xl font-bold text-orange-400 mb-3">
                            5. Modifications to Terms
                        </h2>
                        <p className="text-gray-300">
                            We may update these Terms anytime. Continued use of the platform
                            means you accept the updated Terms & Conditions.
                        </p>
                    </motion.div>

                    {/* Section 6 */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <h2 className="text-2xl font-bold text-orange-400 mb-3">
                            6. Account Termination
                        </h2>
                        <p className="text-gray-300">
                            We reserve the right to suspend or terminate accounts that violate our
                            rules, misuse the app, or engage in illegal activities.
                        </p>
                    </motion.div>

                    {/* Section 7 */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold text-orange-400 mb-3">
                            7. Contact Information
                        </h2>
                        <p className="text-gray-300">
                            For any questions regarding our Terms & Conditions, you may contact us at:
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

export default TermsPage;
