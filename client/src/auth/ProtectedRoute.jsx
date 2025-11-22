import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token");

    // If no token → redirect to login
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // If logged in → allow access
    return children;
}

export default ProtectedRoute;
