import React, { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../Api/Sampleproducts";
import { CartContext } from "../context/CartContext.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const navigate = useNavigate();

    const product = products.find((item) => item.id === parseInt(id));

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return (
            <div className="text-center text-white text-2xl py-20">
                Product Not Found!
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(product); // Add product to cart using context
        toast.success("Product added to cart!", { autoClose: 2000 });
    };

    return (
        <div className="min-h-screen bg-gray-950 text-white relative">
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
                {/* Product Image */}
                <div
                    className="rounded-xl overflow-hidden shadow-lg"
                    data-aos="fade-right"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[420px] object-cover rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                        onClick={() => navigate(`/product/${product.id}`)}
                    />
                </div>

                {/* Product Info */}
                <div data-aos="fade-left">
                    <h1 className="text-4xl font-extrabold text-orange-500">
                        {product.name}
                    </h1>

                    <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                        {product.description || "A delicious item prepared with fresh ingredients. Perfect for your cravings!"}
                    </p>

                    <p className="text-3xl font-semibold text-white mt-6">
                        ₹{product.price}
                    </p>

                    <button
                        onClick={handleAddToCart}
                        className="mt-6 bg-orange-600 hover:bg-orange-700 text-white 
                                   px-6 py-3 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                    >
                        Add to Cart
                    </button>

                    <div className="mt-10">
                        <h2 className="text-2xl font-bold text-orange-400 mb-3">
                            Ingredients
                        </h2>
                        <ul className="list-disc ml-5 text-gray-300 space-y-1">
                            <li>Fresh and organic ingredients</li>
                            <li>Premium quality spices</li>
                            <li>Authentic taste</li>
                            <li>Prepared by expert chefs</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />

            {/* Toast Container */}
            <ToastContainer position="top-right" />
        </div>
    );
}

export default ProductDetails;
