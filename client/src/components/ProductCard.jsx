// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext.jsx";

// function ProductCard({ product }) {
//     const { addToCart } = useContext(CartContext);

//     return (
//         <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
//             <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded-lg mb-2" />
//             <h3 className="font-bold text-lg text-black">{product.name}</h3>
//             <p className="text-gray-700">${product.price}</p>
//             <button
//                 onClick={() => addToCart(product)}
//                 className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
//             >
//                 Add to Cart
//             </button>
//         </div>
//     );
// }

// export default ProductCard;



import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);

    const handleOpenDetails = () => {
        navigate(`/product/${product.id}`, { state: product });
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">

            <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-cover rounded-lg mb-2 cursor-pointer"
                onClick={handleOpenDetails}
            />

            <h3 className="font-bold text-lg text-black">{product.name}</h3>
            <p className="text-gray-700">₹{product.price}</p>

            <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
            >
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;

