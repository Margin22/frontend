// UserRoutes.jsx
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage"; // Ensure correct relative path
import { LoginSignup } from "../LoginSignup/LoginSignup"; // Ensure correct relative path
import { ProfilePage } from "../Profile/ProfilePage";
import { PostYourBook } from "../PostYourBook/PostYourBook";
import { YourPostings } from "../YourPostings/YourPostings";
const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginSignup />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/postyourbook" element={<PostYourBook/>} />
            <Route path="/yourpostings" element={<YourPostings/>} />
        </Routes>
    );
};

export default UserRoutes;
