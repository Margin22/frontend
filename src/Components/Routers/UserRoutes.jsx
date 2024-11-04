// UserRoutes.jsx
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage"; // Ensure correct relative path
import { LoginSignup } from "../LoginSignup/LoginSignup"; // Ensure correct relative path
import { ProfilePage } from "../Profile/ProfilePage";
const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginSignup />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage/>} />
        </Routes>
    );
};

export default UserRoutes;
