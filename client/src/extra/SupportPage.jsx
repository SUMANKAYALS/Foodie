import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import BgImage from "../assets/cart-bg.jpg"; //  Add your image here
import { faqData } from "../Api/faqData.js"
function SupportPage() {
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
                    Support & Help
                </h1>

                {/* FAQ Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                >
                    {faqData.map((item, index) => (
                        <motion.details
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-gray-800/70 backdrop-blur-sm border border-gray-700 p-6 rounded-xl cursor-pointer"
                        >
                            <summary className="text-xl font-semibold flex justify-between items-center text-orange-400">
                                {item.question}
                                <span className="group-open:rotate-180 transition-transform duration-300">
                                    ▼
                                </span>
                            </summary>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4 }}
                                className="mt-3 text-gray-300"
                            >
                                {item.answer}
                            </motion.p>
                        </motion.details>
                    ))}
                </motion.div>

                {/* Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="mt-16 p-8 rounded-2xl bg-gray-900/70 border border-gray-700 shadow-xl"
                >
                    <h2 className="text-3xl font-bold text-orange-400 mb-4 text-center">
                        Need More Help?
                    </h2>
                    <p className="text-gray-300 text-center mb-6">
                        Our support team is here to assist you anytime.
                    </p>

                    <div className="text-center">
                        <a
                            href="mailto:suman13kayal@gmail.com"
                            className="bg-orange-600 hover:bg-orange-700 py-3 px-6 rounded-lg text-lg font-semibold transition-all"
                        >
                            Contact Support
                        </a>
                    </div>
                </motion.div>
            </motion.div>

            <Footer />
        </div>
    );
}

export default SupportPage;
