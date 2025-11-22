import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoImg from "../assets/logo4.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-800 shadow-lg py-2" : "bg-gray-900 py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src={LogoImg} alt="Logo" className="h-10 w-10 object-contain" />
                        <Link to="/home" className="text-2xl font-bold text-orange-500">
                            Foodie
                        </Link>
                    </div>

                    {/* ⭐ Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/home" className="text-gray-200 hover:text-orange-400 transition-all duration-300">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-200 hover:text-orange-400 transition-all duration-300">
                            About
                        </Link>
                        <Link to="/menu" className="text-gray-200 hover:text-orange-400 transition-all duration-300">
                            Menu
                        </Link>
                        <Link to="/contactus" className="text-gray-200 hover:text-orange-400 transition-all duration-300">
                            Contact
                        </Link>

                        <Link
                            to="/profile"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                        >
                            Profile
                        </Link>

                        <Link
                            to="/cart"
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                        >
                            Order
                        </Link>

                        {/* ⭐ Logout Button */}
                        <Link
                            to="/logout"
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                        >
                            Logout
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-200">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ⭐ Mobile Menu */}
            <div
                className={`md:hidden bg-gray-900 transition-max-height duration-500 overflow-hidden ${isOpen ? "max-h-80" : "max-h-0"
                    }`}
            >
                <div className="px-4 pt-2 pb-4 flex flex-col space-y-2">
                    <Link to="/home" onClick={toggleMenu} className="text-gray-200 hover:text-orange-400">
                        Home
                    </Link>
                    <Link to="/about" onClick={toggleMenu} className="text-gray-200 hover:text-orange-400">
                        About
                    </Link>
                    <Link to="/menu" onClick={toggleMenu} className="text-gray-200 hover:text-orange-400">
                        Menu
                    </Link>
                    <Link to="/contactus" onClick={toggleMenu} className="text-gray-200 hover:text-orange-400">
                        Contact
                    </Link>

                    <Link
                        to="/profile"
                        onClick={toggleMenu}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-center font-semibold"
                    >
                        Profile
                    </Link>

                    <Link
                        to="/cart"
                        onClick={toggleMenu}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center font-semibold"
                    >
                        Order
                    </Link>

                    {/* ⭐ Mobile Logout */}
                    <Link
                        to="/logout"
                        onClick={toggleMenu}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-center font-semibold"
                    >
                        Logout
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
