import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroBg from "../assets/home-bg.jpg"; // Background image
import Dish1 from "../assets/dish1.jpg"; // Example dish images
import Dish2 from "../assets/dish2.jpg";
import Dish3 from "../assets/dish3.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="relative min-h-screen text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-100"
                style={{ backgroundImage: `url(${HeroBg})` }}
            ></div>

            {/* Overlay */}
            <div className="relative z-10 flex flex-col min-h-screen bg-gray-900/80 backdrop-blur-sm">
                <Navbar />

                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center text-center py-32 px-4">
                    <h1
                        className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-6 animate-bounce"
                        data-aos="fade-up"
                    >
                        Welcome to Foodie
                    </h1>
                    <p
                        className="text-gray-200 text-lg md:text-xl max-w-2xl mb-8"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Experience the finest culinary delights in South 24 Parganas, West Bengal. Fresh
                        ingredients, exquisite flavors, and a cozy ambiance await you.
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
                        <Link
                            to="/menu"
                            className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                            View Menu
                        </Link>
                        <Link
                            to="/contactus"
                            className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                        >
                            Contact Us
                        </Link>
                    </div>
                </section>

                {/* Features Section */}
                <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-10">
                    {[
                        {
                            title: "Fresh Ingredients",
                            desc: "We only use fresh, locally-sourced ingredients to make every dish perfect.",
                            aos: "fade-right",
                        },
                        {
                            title: "Exquisite Flavors",
                            desc: "Our recipes blend traditional and modern flavors for an unforgettable taste.",
                            aos: "fade-up",
                        },
                        {
                            title: "Cozy Ambiance",
                            desc: "Relax in our warm and welcoming environment while enjoying your meal.",
                            aos: "fade-left",
                        },
                    ].map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-800/70 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transform transition duration-500"
                            data-aos={feature.aos}
                        >
                            <h3 className="text-2xl font-bold text-orange-500 mb-2">{feature.title}</h3>
                            <p className="text-gray-200">{feature.desc}</p>
                        </div>
                    ))}
                </section>

                {/* Top Dishes Section */}
                <section className="max-w-6xl mx-auto py-16 px-6">
                    <h2
                        className="text-4xl font-bold text-orange-500 text-center mb-10"
                        data-aos="fade-up"
                    >
                        Our Top Dishes
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[Dish1, Dish2, Dish3].map((dish, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-800/70 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-500"
                                data-aos="zoom-in"
                                data-aos-delay={idx * 200}
                            >
                                <img src={dish} alt={`Dish ${idx + 1}`} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-orange-500 mb-2">indian special thali</h3>
                                    <p className="text-gray-200 mb-4">Delicious description of the dish here.</p>
                                    <p className="text-orange-400 font-semibold text-lg">₹199</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call-to-Action Banner */}
                <section className="bg-gray-900/80 py-16 text-center">
                    <h2 className="text-4xl font-bold text-orange-500 mb-4" data-aos="fade-up">
                        Book a Table Now!
                    </h2>
                    <Link
                        to="/contactus"
                        className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Reserve
                    </Link>
                </section>

                <Footer />
            </div>
        </div>
    );
}

export default Home;
