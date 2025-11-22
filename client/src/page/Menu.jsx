import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../Api/Sampleproducts"; // make sure this has 100 products
import MenuBg from "../assets/menu-bg.jpg"; // background image
import AOS from "aos";
import "aos/dist/aos.css";

function Menu() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="relative min-h-screen text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-100"
                style={{ backgroundImage: `url(${MenuBg})` }}
            ></div>

            {/* Overlay */}
            <div className="relative z-10 flex flex-col min-h-screen bg-gray-900/80">
                <Navbar /><br />

                {/* Header */}
                <div className="text-center py-16 bg-gray-800/70 backdrop-blur-sm">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 animate-fadeIn">
                        Our Menu
                    </h1>
                    <p className="text-gray-300 mt-4 text-lg md:text-xl max-w-2xl mx-auto animate-fadeIn delay-200">
                        Explore our delicious dishes and add your favorites to the cart.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default Menu;
