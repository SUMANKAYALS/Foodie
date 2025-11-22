import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/auth";
const PRODUCT_URL = import.meta.env.VITE_PRODUCT_API_URL || "http://localhost:3000/api/Message";
const ORODER_URL = import.meta.env.VITE_ORDER_API_URL || "http://localhost:3000/api/Order";

export const signup = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, data);
        return response.data;
    } catch (error) {
        console.error("Registration failed:", error);
        throw error;
    }
}

export const login = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/login`, data, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.log("Login failed:", error);
    }
}

export const logoutUser = async () => {
    try {
        const response = await axios.post(`${API_URL}/logout`, {}, { withCredentials: true })
        return response.data;
    } catch (error) {
        console.log("Logout failed:", error);
    }
}

export const feedback = async (data) => {
    try {
        const response = await axios.post(`${PRODUCT_URL}/userMessage`, data);
        return response.data;
    } catch (error) {
        console.log("Feedback failed: ", error);
    }
}

export const orderData_prodeuct = async (data) => {
    try {
        const response = await axios.post(`${ORODER_URL}/order`, data);
        return response.data;
    } catch (error) {
        console.log("Order failed: ", error);
    }
}

export const OtpVerification = async (email, finalOtp) => {
    try {
        const response = await axios.post(`${API_URL}/otpverify`, {
            email,
            otp: finalOtp
        });
        return response.data;
    } catch (error) {
        console.log("Otperification failed: ", error);
    }
}

export const resend = async (email) => {
    try {
        const response = await axios.post(`${API_URL}/resend-otp`, {
            email
        });
        return response.data;
    } catch (error) {
        console.log("resend Otperification failed: ", error);
    }
}