import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProfilePage.css';

export const ProfilePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const { username, email, password } = location.state || {};

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            <div className="profile-info">
                <p>Username:</p>
                <input type='text' value={username} disabled />
                <p>Email:</p>
                <input type='text' value={email} disabled />
                <p>Password:</p>
                <input type='text' value={password} disabled />
            </div>
            <button onClick={() => navigate('/home')} className="back-button">Back to Home</button>
        </div>
    );
};

