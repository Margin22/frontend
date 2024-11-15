import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProfilePage.css';
export const ProfilePage = () => {
    const [userData, setUserData] = useState({ username: '', email: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const accessToken = localStorage.getItem("accessToken");
            console.log("Access token from localStorage:", accessToken);

            if (!accessToken) {
                alert("You are not logged in");
                navigate('/login'); // Redirect to login if no token found
                return;
            }

            try {
                const response = await axios.get("http://localhost:8000/api/auth/user", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
             
                console.log("Response status:", response.status);
                console.log("Response data:", response.data);
                
                if (response.data && response.data.username && response.data.email) {
                    setUserData(response.data);
                } else {
                    console.error("Unexpected response format", response.data);
                } 
            } catch (error) {
                console.error("Error fetching user data", error);
                if (error.response) {
                    // Log error response details
                    console.error("Error status:", error.response.status);
                    console.error("Error data:", error.response.data);
                }
                if (error.response && error.response.status === 401) {
                    alert("Session expired. Please log in again.");
                    navigate('/login');
                } else {
                    alert("An error occurred while fetching data.");
                }
            }
            
        };

        fetchUserData();
    }, [navigate]);

    return (
        <div className="Background">
            <div className="profile-container">
                <h2>User Profile</h2>
                <div className="profile-info">
                    <p><b>Username:</b></p>
                    <input type='text' value={userData.username || ""} disabled />
                    <p><b>Email:</b></p>
                    <input type='text' value={userData.email || ""} disabled />
                </div>  
                <button onClick={() => navigate('/home')} className="back-button100">Back to Home</button>
            </div>
        </div>
    );
};
