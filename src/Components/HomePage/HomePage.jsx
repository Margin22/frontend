import React, { useState } from 'react';
import './HomePage.css'; // Ensure this path is correct
import {useLocation, useNavigate } from 'react-router-dom'; // Importing useNavigate
import book_icon from '../Assets/book.jpg';
export const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();   
  const navigate = useNavigate(); // Initialize useNavigate
  const { price, date, name, Category } = location.state || {};

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleProfileClick = () => {
    navigate('/profile'); // Navigate to ProfilePage
};
  const handlePostYourBookClick = () => {
    navigate('/postyourbook');
  };
  const handleYourPostingsClick = () => {
    navigate('/yourpostings');
  };
  const handleOrderHistoryClick = () => {
    navigate('/orderhistory');
  };


  return (
    <div className="homepage">
      <header className="header">
        <button onClick={toggleSidebar} className="bars-icon">☰</button>
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Search for books" />
        </div>
      </header>
      <main className="book-list">
        <h2 className="book-list-title">Available Books</h2>
        <div className="book-items-container2">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="book-item">
              <div className="book-image"> <img src={book_icon} alt='book'/></div>
              <div className="book-description"><label>Posted Date:</label> <input type='text' value={date} disabled />
              <label>Book Name:</label> <input type='text' value={name} disabled /> 
              <label>Price:</label> <input type='text' value={price} disabled />
              <label>Book Category:</label> <input type= 'text' value={Category} disabled />
              </div>
            </div>
          ))}
        </div>
      </main>
      
      {/* Sidebar with slide-in effect */}
      {showSidebar && (
        <aside className={`sidebar ${showSidebar ? 'slide-in' : ''}`}>
          <button onClick={handleProfileClick}>Profile</button> {/* Existing Profile button with navigation */}
          <button onClick={handlePostYourBookClick}>Post your book</button>
          <button onClick={handleYourPostingsClick}>Your Postings</button>
          <button onClick={handleOrderHistoryClick}>Order History</button>
        </aside>
      )}
    </div>
  );
};
