import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProfilePage.css';

export const ProfilePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const { username, email, password } = location.state || {};

    return (
        <div className="Background">
        <div className="profile-container">
            <h2>User Profile</h2>
            <div className="profile-info">
                <p><b>Username:</b></p>
                <input type='text' value={username} disabled />
                <p><b>Email:</b></p>
                <input type='text' value={email} disabled />
                </div>  
            <button onClick={() => navigate('/home')} className="back-button">Back to Home</button>
        </div>
        </div>
    );
};

