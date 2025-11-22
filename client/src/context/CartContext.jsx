import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.name === product.name);

            // 🟢 If item already in cart → increase quantity
            if (existingItem) {
                return prevCart.map((item) =>
                    item.name === product.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            // 🟢 Add new item with quantity = 1
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (name) => {
        setCart((prevCart) => prevCart.filter((item) => item.name !== name));
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
