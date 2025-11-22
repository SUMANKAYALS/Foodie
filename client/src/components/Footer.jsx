import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <h2 className="text-2xl font-bold text-orange-500 mb-3">🍽️ Our Restaurant</h2>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Experience delicious food with fast delivery and premium taste.
                        Your satisfaction is our top priority.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/home" className="hover:text-orange-400">Home</Link></li>
                        <li><Link to="/menu" className="hover:text-orange-400">Menu</Link></li>
                        <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
                        <li><Link to="/contactus" className="hover:text-orange-400">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
                    <ul className="space-y-2">
                        <li><Link to="/faq" className="hover:text-orange-400">FAQ</Link></li>
                        <li><Link to="/privacy" className="hover:text-orange-400">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-orange-400">Terms & Conditions</Link></li>
                        <li><Link to="/help" className="hover:text-orange-400">Help Center</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li>Email: suman13kayal@gmail.com</li>
                        <li>Phone: +91 8327890331</li>
                        <li>Location: outh 24 Parganas, West Bengal, India</li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-8 pt-5 border-t border-white/10">
                © {new Date().getFullYear()} Sky's Restaurant. All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footer;
