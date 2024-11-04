import React, { useState } from 'react';
import './HomePage.css'; // Ensure this path is correct
import web_icon from '../Assets/web logo1.jpg'; // Ensure correct relative path
import {useLocation, useNavigate } from 'react-router-dom'; // Importing useNavigate
import book_icon from '../Assets/book.jpg';
export const HomePage = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();   
  const navigate = useNavigate(); // Initialize useNavigate
  const { price, date, name } = location.state || {};
  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to ProfilePage
};

  return (
    <div className="homepage">
      <div className="logo-container">
        <img src={web_icon} alt="Logo" className="logo" />
      </div>
      <header className="header">
        <button onClick={toggleSidebar} className="bars-icon">☰</button>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Search for books" />
          <button onClick={toggleCategories} className="category-button">Show Books Categories</button>
        </div>
      </header>
      <main className="book-list">
        <h2 className="book-list-title">Available Books</h2>
        <div className="book-items-container">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="book-item">
              <div className="book-image"> <img src={book_icon}/></div>
              <div className="book-description"><label>Posted Date:</label> <input type='text' value={date} disabled />
              <label>Book Name:</label> <input type='text' value={name} disabled /> 
              <label>Price:</label> <input type='text' value={price} disabled />
              </div>
            </div>
          ))}
        </div>
      </main>
      
      {/* Sidebar with slide-in effect */}
      {showSidebar && (
        <aside className={`sidebar ${showSidebar ? 'slide-in' : ''}`}>
          <button onClick={handleProfileClick}>Profile</button> {/* Existing Profile button with navigation */}
          <button>Sell your book</button>
          <button>Update/Edit your book</button>
        </aside>
      )}
      
      {/* Dropdown menu for categories with slide-in effect */}
      {showCategories && (
        <div className={`dropdown-menu ${showCategories ? 'slide-in' : ''}`}>
          <button>Computer and Technology</button>
          <button>History</button>
          <button>Physics</button>
          <button>Chemistry</button>
          <button>Biology</button>
          <button>Math</button>
          <button>Encyclopedias</button>
          <button>Business</button>
          <button>Law</button>
          <button>Travel</button>
        </div>
      )}
    </div>
  );
};
