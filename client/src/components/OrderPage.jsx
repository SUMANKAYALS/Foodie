import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import BgImage from "../assets/order-bg.jpg";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { orderData_prodeuct } from "../Api/api.js";

function OrderPage() {
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();

    const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    const totalPrice = cart.reduce(
        (acc, item) => acc + Number(item.price) * (item.quantity || 1),
        0
    );

    const [paymentMethod, setPaymentMethod] = useState("cod");

    const [userInfo, setUserInfo] = useState({
        name: "",
        phone: "",
        address: "",
    });

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const handleOrderConfirm = async () => {
        if (!userInfo.name || !userInfo.phone || !userInfo.address) {
            toast.error("Please fill all the details!", { autoClose: 1800 });
            return;
        }

        if (cart.length === 0) {
            toast.error("Your cart is empty!", { autoClose: 1800 });
            return;
        }

        // Prepare order data for backend
        const orderData = {
            userInfo,
            cartItems: cart.map((item) => ({
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                total: item.price * item.quantity
            })),
            totalItems,
            totalPrice,
            paymentMethod,
        };

        try {
            // Send order to backend
            // await axios.post("http://localhost:5000/api/order/create", orderData);
            await orderData_prodeuct(orderData);

            // ---- COD ----
            if (paymentMethod === "cod") {
                toast.success("Order placed successfully! 🎉", { autoClose: 2000 });
                setTimeout(() => {
                    setCart([]);
                    navigate("/menu");
                }, 2000);
            }

            // ---- ONLINE PAYMENT ----
            if (paymentMethod === "online") {
                toast.info("Redirecting to secure payment gateway...", { autoClose: 2000 });
                setTimeout(() => {
                    setCart([]);
                    toast.success("Payment Successful! ", { autoClose: 1800 });
                    navigate("/menu");
                }, 3000);
            }
        } catch (error) {
            console.log("Order Error:", error);
            toast.error("Server Error while placing order!", { autoClose: 2000 });
        }
    };


    return (
        <div className="min-h-screen relative">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${BgImage})` }}
            ></div>

            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 p-6 flex justify-center items-center min-h-screen">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-3xl w-full bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20"
                >
                    <h1 className="text-4xl font-bold mb-6 text-center text-white drop-shadow-lg">
                        🛒 Order & Payment
                    </h1>

                    {/* 🔥 ITEMS WITH NAME + QUANTITY + TOTAL */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="mb-6 text-white"
                    >
                        <h2 className="text-xl font-semibold mb-3">Items in Your Order</h2>

                        <div className="bg-white/20 p-4 rounded-lg shadow-md">
                            {cart.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center mb-3 border-b pb-2"
                                >
                                    <div>
                                        <p className="font-medium">{item.name}</p>
                                        <p className="text-sm text-gray-300">
                                            Quantity: <strong>{item.quantity || 1}</strong>
                                        </p>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-orange-300 font-bold">
                                            Price: ₹{item.price}
                                        </p>
                                        <p className="text-green-300 text-sm">
                                            Total: ₹
                                            {(item.price * (item.quantity || 1)).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ORDER SUMMARY */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-6 text-white"
                    >
                        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>

                        <p>Total Items: <strong>{totalItems}</strong></p>
                        <p>Total Price: <strong>₹{totalPrice.toFixed(2)}</strong></p>
                    </motion.div>

                    {/* DELIVERY DETAILS */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mb-6 text-white"
                    >
                        <h2 className="text-xl font-semibold mb-3">Delivery Details</h2>

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="w-full mb-3 p-3 border rounded bg-white/70 text-black"
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            className="w-full mb-3 p-3 border rounded bg-white/70 text-black"
                            onChange={handleChange}
                        />

                        <textarea
                            name="address"
                            placeholder="Full Address"
                            className="w-full p-3 border rounded bg-white/70 text-black"
                            onChange={handleChange}
                        />
                    </motion.div>

                    {/* PAYMENT METHOD */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mb-6 text-white"
                    >
                        <h2 className="text-xl font-semibold mb-3">Payment Method</h2>

                        <label className="block mb-2">
                            <input
                                type="radio"
                                name="payment"
                                value="cod"
                                checked={paymentMethod === "cod"}
                                onChange={() => setPaymentMethod("cod")}
                                className="mr-2"
                            />
                            Cash on Delivery
                        </label>

                        <label className="block mb-2">
                            <input
                                type="radio"
                                name="payment"
                                value="online"
                                checked={paymentMethod === "online"}
                                onChange={() => setPaymentMethod("online")}
                                className="mr-2"
                            />
                            Online Payment (UPI | Card | NetBanking)
                        </label>
                    </motion.div>

                    {/* CONFIRM BUTTON */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleOrderConfirm}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold shadow-lg transition-all"
                    >
                        Confirm Order
                    </motion.button>
                </motion.div>
            </div>

            <ToastContainer />
        </div>
    );
}

export default OrderPage;
