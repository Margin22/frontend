import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import web_icon from "../Assets/web logo.jpg";

export const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let formErrors = {};
        if (action === "Login") {
            if (!username) formErrors.username = "Username is required";
            if (!password) formErrors.password = "Password is required";

            if (!formErrors.username && !formErrors.password) {
                if (userData.username !== username || userData.password !== password) {
                    formErrors.login = "Invalid username or password";
                }
            }
        } else {
            if (!username) formErrors.username = "Username is required";
            if (!email) formErrors.email = "Email is required";
            if (!password) formErrors.password = "Password is required";
        }

        if (Object.keys(formErrors).length === 0) {
            if (action === "Sign Up") {
                setUserData({ username, email, password });
                alert("Signup successful! You can now log in.");
            } else {
                navigate("/home");
            } 

        } else {
            setErrors(formErrors);
        }
      
    };

    return (
        <div className='container2'>
            <div className='container'>
                <div className="header1">
                    <img src={web_icon} alt="Marketplace icon" />
                    <div className="underline"></div>
                </div>
                <form className="inputs" onSubmit={handleSubmit}>
                    <h1>{action}</h1>
                    <br />
                    {action === "Login" ? (
                        <>
                            <div className="input-container">
                                <img src={user_icon} alt="Username" className="input-icon" />
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                        setErrors((prev) => ({ ...prev, username: "" }));
                                    }}
                                    aria-label="Username"
                                    required
                                />
                                {errors.username && <p className="error">{errors.username}</p>}
                            </div>
                            <div className="input-container">
                                <img src={password_icon} alt="Password" className="input-icon" />
                                <input
                                    type="password"
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setErrors((prev) => ({ ...prev, password: "" }));
                                    }}
                                    aria-label="Password"
                                    required
                                />
                                {errors.password && <p className="error">{errors.password}</p>}
                            </div>
                            {errors.login && <p className="error">{errors.login}</p>}
                        </>
                    ) : (
                        <>
                            <div className="input-container">
                                <img src={user_icon} alt='Username' className="input-icon" />
                                <input
                                    type='text'
                                    placeholder='Username'
                                    value={username}
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                        setErrors((prev) => ({ ...prev, username: "" }));
                                    }}
                                    aria-label="Username"
                                    required
                                />
                                {errors.username && <p className="error">{errors.username}</p>}
                            </div>
                            <div className="input-container">
                                <img src={email_icon} alt="Email" className="input-icon" />
                                <input
                                    type="email"
                                    placeholder='Email'
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setErrors((prev) => ({ ...prev, email: "" }));
                                    }}
                                    aria-label="Email"
                                    required
                                />
                                {errors.email && <p className="error">{errors.email}</p>}
                            </div>
                            <div className="input-container">
                                <img src={password_icon} alt="Password" className="input-icon" />
                                <input
                                    type="password"
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setErrors((prev) => ({ ...prev, password: "" }));
                                    }}
                                    aria-label="Password"
                                    required
                                />
                                {errors.password && <p className="error">{errors.password}</p>}
                            </div>
                        </>
                    )}
                    <div className="submit-container">
                        <button type="submit" className="submit">{action}</button>
                        <button
                            type="button"
                            className="toggle-button"
                            onClick={() => { setAction(action === "Login" ? "Sign Up" : "Login") }}
                        >
                            {action === "Login" ? "Go For Signup!" : "Go For Login!"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
