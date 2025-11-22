import React, { useEffect, useState } from "react";
import BgImage from "../assets/login2.jpg";
import Logo from "../assets/logo4.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";

function LandingPage() {
    const texts = [
        "Welcome to Our Foodis Lovers.",
        "Fresh Taste. Amazing Feel.",
        "Order Your Favorite Food",
    ];

    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    // Typing Animation
    useEffect(() => {
        const current = texts[index];

        const timer = setTimeout(() => {
            if (charIndex < current.length) {
                setDisplayText(current.substring(0, charIndex + 1));
                setCharIndex((c) => c + 1);
            } else {
                setTimeout(() => {
                    setDisplayText("");
                    setCharIndex(0);
                    setIndex((i) => (i + 1) % texts.length);
                }, 1200);
            }
        }, 85);

        return () => clearTimeout(timer);
    }, [charIndex, index]);

    // Toast
    useEffect(() => {
        toast.info("🍽️ Welcome Food Lover!", {
            position: "bottom-right",
            autoClose: 2200,
            theme: "dark",
        });
    }, []);

    // -------------------------
    // SMOOTH MOUSE + SCROLL MOTION
    // -------------------------
    const [logoStyle, setLogoStyle] = useState({
        transform: "translate3d(0,0,0)",
    });

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let scrollBounce = 0;

        const handleMouseMove = (e) => {
            // Get screen center difference
            const x = (e.clientX - window.innerWidth / 2) * 0.01;
            const y = (e.clientY - window.innerHeight / 2) * 0.01;
            mouseX = x;
            mouseY = y;
        };

        const handleScroll = () => {
            scrollBounce = window.scrollY * 0.05; // gentle bounce
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);

        // Smooth animation frame loop
        const animate = () => {
            setLogoStyle({
                transform: `translate3d(${mouseX}px, ${mouseY - scrollBounce}px, 0)`,
                transition: "transform 0.15s ease-out",
            });
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-full overflow-hidden">

            <section
                className="w-full min-h-screen bg-cover bg-center relative flex justify-center items-center text-white"
                style={{ backgroundImage: `url(${BgImage})` }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-center max-w-xl px-6">

                    {/* Smooth Motion Logo */}
                    <img
                        src={Logo}
                        alt="Restaurant Logo"
                        className="w-48 md:w-[15rem] mx-auto mb-6 drop-shadow-2xl"
                        style={logoStyle}
                    />

                    {/* Typing Text */}
                    <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-xl h-24 flex justify-center items-center">
                        <span className="border-r-4 border-orange-500 pr-1 animate-pulse">
                            {displayText}
                        </span>
                    </h1>

                    <p className="mt-3 text-lg text-gray-300 leading-relaxed">
                        Enjoy premium taste with a modern online food ordering experience.
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center gap-5 mt-8">
                        <Link
                            to="/login"
                            className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-xl text-lg font-semibold transition"
                        >
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            className="bg-gray-200 text-black hover:bg-white px-6 py-3 rounded-xl text-lg font-semibold transition"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
            <ToastContainer />

        </div>
    );
}

export default LandingPage;
