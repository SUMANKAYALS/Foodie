import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import BgImage from "../assets/privacy-bg.jpg"; // Background image
import { helpOptions } from "../Api/faqData.js";
function HelpPage() {
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
                className="max-w-5xl mx-auto p-6 py-16"
            >
                <h1 className="text-5xl font-extrabold text-orange-500 text-center mb-12">
                    Help Center
                </h1>

                {/* HELP GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {helpOptions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-900/70 p-6 rounded-xl border border-gray-700 shadow-xl 
                            cursor-pointer hover:scale-105 transition-all backdrop-blur-md"
                        >
                            <div className="text-5xl mb-4 text-orange-400">{item.icon}</div>
                            <h3 className="text-2xl font-bold mb-2 text-orange-300">{item.title}</h3>
                            <p className="text-gray-300">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CONTACT BOX */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-16 bg-gray-900/80 p-8 rounded-2xl border border-gray-700 shadow-xl backdrop-blur-md"
                >
                    <h2 className="text-3xl font-bold text-orange-400 mb-3 text-center">
                        Still Need Help?
                    </h2>
                    <p className="text-gray-300 text-center mb-6">
                        Our support team is here 24/7 to assist you with anything.
                    </p>

                    <div className="text-center">
                        <a
                            href="mailto:suman13kayal@gmail.com"
                            className="bg-orange-600 hover:bg-orange-700 py-3 px-6 rounded-lg text-lg font-semibold transition-all"
                        >
                            Email Support
                        </a>
                    </div>
                </motion.div>
            </motion.div>

            <Footer />
        </div>
    );
}

export default HelpPage;
