import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutBg from "../assets/about-bg.jpg"; // Your background image
import Developer from "../assets/developer.jpg"
import { FaLinkedin, FaInstagram, FaGithub, FaGlobe } from "react-icons/fa";

function About() {
    return (
        <div className="relative min-h-screen bg-gray-900 text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${AboutBg})` }}
            ></div>

            {/* Overlay */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />

                {/* HEADER SECTION */}
                <section className="text-center py-20 px-4">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 drop-shadow-lg animate-fadeIn">
                        About Us
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-fadeIn delay-200">
                        Welcome to MyRestaurant! We are passionate about providing the best culinary
                        experience, blending flavors, creativity, and a warm ambiance.
                    </p>
                </section>

                {/* MISSION SECTION */}
                <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
                    <div className="animate-slideLeft">
                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                            alt="Mission"
                            className="rounded-2xl shadow-xl transform hover:scale-105 transition duration-500"
                        />
                    </div>
                    <div className="animate-slideRight">
                        <h2 className="text-3xl font-bold text-orange-500 mb-4">Our Mission</h2>
                        <p className="text-gray-200 text-lg">
                            Our mission is to create a memorable dining experience for every guest
                            through fresh ingredients, innovative recipes, and exceptional service.
                        </p>
                    </div>
                </section>

                {/* TEAM SECTION */}
                <section className="max-w-6xl mx-auto py-16 px-6">
                    <h2 className="text-4xl font-bold text-orange-500 text-center mb-10 animate-fadeIn">
                        Meet Our Developer
                    </h2>
                    <div className="flex justify-center">
                        {/* Developer Card */}
                        <div className="bg-gray-800/70 p-6 rounded-2xl text-center shadow-lg transform hover:scale-105 transition duration-500 max-w-xs">
                            <img
                                src={Developer}
                                alt="Developer"
                                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                            />
                            <h3 className="text-xl font-bold text-orange-400">Suman Kayal</h3>
                            <p className="text-gray-300 mb-4">Full Stack Developer</p>

                            {/* Developer Links */}
                            <div className="flex justify-center gap-4 text-gray-300 text-xl">
                                <a
                                    href="https://www.linkedin.com/in/suman-kayal10/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-orange-400 transition-colors"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://www.instagram.com/sumankayal_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-orange-400 transition-colors"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="https://github.com/SUMANKAYALS"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-orange-400 transition-colors"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://sumankayal.dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-orange-400 transition-colors"
                                >
                                    <FaGlobe />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}

export default About;
