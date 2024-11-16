import { Routes, Route } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage"; 
import { LoginSignup } from "../LoginSignup/LoginSignup"; 
import { ProfilePage } from "../Profile/ProfilePage";
import  PostYourBook  from "../PostYourBook/PostYourBook";
import { YourPostings } from "../YourPostings/YourPostings";
import {BookDescription} from "../BookDescription/BookDescription";
import {YourBookDetails} from "../YourBookDetails/YourBookDetails";
import Checkout from "../Checkout/Checkout";
const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginSignup />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/postyourbook" element={<PostYourBook/>} />
            <Route path="/yourpostings" element={<YourPostings/>} />
            <Route path="/bookdescription" element={<BookDescription/>} />
            <Route path="/yourbookdetails" element={<YourBookDetails/>} />
            <Route path="/checkout" element={<Checkout/>} />
        </Routes>
    );
};

export default UserRoutes;