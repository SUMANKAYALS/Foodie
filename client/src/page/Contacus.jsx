import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BgImage from "../assets/contact-bg.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { feedback } from "../Api/api";

function ContactUs() {
    const [messageData, setMessageData] = useState({
        Name: "",
        email: "",
        Message: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await feedback(messageData);
        // Show toast notification
        toast.success("Your message has been sent!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        console.log("Message Data:", messageData);

        // Reset form after submission
        setMessageData({
            Name: "",
            email: "",
            Message: ""
        });
    };

    return (
        <div className="relative min-h-screen">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${BgImage})` }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col min-h-screen text-white">
                <Navbar /><br />

                {/* HEADER */}
                <div className="text-center py-14">
                    <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
                        Contact Us
                    </h1>
                    <p className="mt-3 text-lg drop-shadow">
                        We'd love to hear from you! Reach out anytime.
                    </p>
                </div>

                {/* MAIN CONTENT */}
                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 sm:px-6 mb-16">
                    {/* CONTACT FORM */}
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-orange-300 hover:scale-105 transform transition duration-300">
                        <h2 className="text-2xl font-bold text-orange-400 mb-6">
                            Send Us a Message
                        </h2>
                        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="Name"
                                placeholder="Your Name"
                                className="peer w-full p-4 border-2 border-orange-400 rounded-lg bg-transparent text-white focus:border-orange-500 outline-none transition-all duration-300 shadow-sm shadow-orange-400 hover:shadow-md"
                                required
                                value={messageData.Name}
                                onChange={(e) =>
                                    setMessageData({ ...messageData, [e.target.name]: e.target.value })
                                }
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="peer w-full p-4 border-2 border-orange-400 rounded-lg bg-transparent text-white focus:border-orange-500 outline-none transition-all duration-300 shadow-sm shadow-orange-400 hover:shadow-md"
                                required
                                value={messageData.email}
                                onChange={(e) =>
                                    setMessageData({ ...messageData, [e.target.name]: e.target.value })
                                }
                            />

                            <textarea
                                rows={4}
                                name="Message"
                                placeholder="Your Message"
                                className="peer w-full p-4 border-2 border-orange-400 rounded-lg bg-transparent text-white focus:border-orange-500 outline-none transition-all duration-300 shadow-sm shadow-orange-400 hover:shadow-md"
                                required
                                value={messageData.Message}
                                onChange={(e) =>
                                    setMessageData({ ...messageData, [e.target.name]: e.target.value })
                                }
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* CONTACT INFO + MAP */}
                    <div className="flex flex-col gap-6">
                        {/* INFO CARD */}
                        <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl border border-orange-300 shadow-xl hover:scale-105 transform transition duration-300">
                            <h2 className="text-2xl font-bold text-orange-400 mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <FaPhoneAlt className="text-orange-400 text-xl" />
                                    <p className="text-gray-200 text-lg">+91 8327890331</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaEnvelope className="text-orange-400 text-xl" />
                                    <p className="text-gray-200 text-lg">suman13kayal@gmail.com</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaMapMarkerAlt className="text-orange-400 text-xl" />
                                    <p className="text-gray-200 text-lg">
                                        South 24 Parganas, West Bengal, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* MAP */}
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-orange-300 h-64">
                            <iframe
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5440.853693739041!2d88.29545994081695!3d22.08996539780434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a025b6d7514edbb%3A0xe7ff17a19ab37df!2sAlak%20Kumar%20Kayal!5e0!3m2!1sen!2sin!4v1763401960091!5m2!1sen!2sin"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>

            {/* Toast Container */}
            <ToastContainer />
        </div>
    );
}

export default ContactUs;
