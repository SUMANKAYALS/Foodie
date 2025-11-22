import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        userInfo: {
            name: {
                type: String,
                required: true,
                trim: true,
            },
            phone: {
                type: String,
                required: true,
            },
            address: {
                type: String,
                required: true,
            },
        },

        cartItems: [
            {
                name: { type: String, required: true },
                price: { type: Number, required: true },
                quantity: { type: Number, default: 1 },
                total: { type: Number, required: true }, // price * quantity
            },
        ],

        totalItems: {
            type: Number,
            required: true,
        },

        totalPrice: {
            type: Number,
            required: true,
        },

        paymentMethod: {
            type: String,
            enum: ["cod", "online"],
            default: "cod",
        },

        paymentStatus: {
            type: String,
            enum: ["pending", "paid"],
            default: "pending",
        },

        orderStatus: {
            type: String,
            enum: ["placed", "confirmed", "delivered", "cancelled"],
            default: "placed",
        },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
