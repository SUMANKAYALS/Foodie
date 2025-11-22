import dish7 from "../assets/dish7.jpg";
import dish8 from "../assets/dish8.jpg";
import dish9 from "../assets/dish9.jpg";
import dish10 from "../assets/dish10.jpg";
import dish11 from "../assets/dish11.jpg";
import dish12 from "../assets/dish12.jpg";

const baseProducts = [
    { name: "Margherita Pizza", price: 1151.16, image: dish7 },
    { name: "Pasta Alfredo", price: 973.92, image: dish8 },
    { name: "Grilled Chicken", price: 1417.02, image: dish9 },
    { name: "Caesar Salad", price: 796.68, image: dish10 },
    { name: "Chocolate Cake", price: 619.45, image: dish11 },
    { name: "Raman", price: 619.45, image: dish12 },
];

export const products = Array.from({ length: 12 }, (_, i) => {
    const base = baseProducts[i % baseProducts.length]; // cycle through 5 base products
    return {
        id: i + 1,
        name: `${base.name}`,
        price: (base.price + (i % 5)).toFixed(2), // slightly vary the price
        image: base.image,
    };
});

export const stateDistricts = {
    "West Bengal": ["Kolkata", "Howrah", "Hooghly", "North 24 Parganas", "South 24 Parganas"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Noida"],
};