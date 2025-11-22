import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
    const token = localStorage.getItem("token");

    // If logged in, do NOT allow visiting login/signup
    if (token) {
        return <Navigate to="/home" replace />;
    }

    // If not logged in, allow access
    return children;
}

export default PublicRoute;
