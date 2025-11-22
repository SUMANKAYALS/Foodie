import OrderModel from "../Model/order.model.js";

export const createOrder = async (req, res) => {
    try {
        const { userInfo, cartItems, totalItems, totalPrice, paymentMethod } = req.body;

        if (!userInfo || !cartItems || cartItems.length === 0) {
            return res.status(400).json({ message: "Invalid order data" });
        }

        // 🔥 FIX: Calculate total for each cart item
        const updatedCartItems = cartItems.map(item => ({
            ...item,
            total: item.price * item.quantity, // backend calculation
        }));

        const order = await OrderModel.create({
            userInfo,
            cartItems: updatedCartItems,
            totalItems,
            totalPrice,
            paymentMethod,
            paymentStatus: paymentMethod === "online" ? "paid" : "pending",
        });

        res.status(201).json({
            message: "Order placed successfully",
            order,
        });

    } catch (error) {
        console.log("Order error:", error);
        res.status(500).json({ message: "server error", error });
    }
};
