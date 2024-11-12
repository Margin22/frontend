import React, { useState } from 'react';
import './HomePage.css'; // Ensure this path is correct
import { useLocation, useNavigate } from 'react-router-dom';
import book_icon from '../Assets/book.jpg';
import search_icon from '../Assets/search_logo.png';

export const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]); // Filtered book list
  const location = useLocation();   
  const navigate = useNavigate();
  const { price, date, name, Category } = location.state || {};

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleProfileClick = () => {
    navigate('/profile');
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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Filter books based on the search term, only if book.name is defined
    const results = Array(10).fill({ name, Category, price, date }).filter(book =>
        book.name && book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(results);
};


  return (
    <div className="homepage">
      <header className="header">
        <button onClick={toggleSidebar} className="bars-icon">☰</button>
        
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for books"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="button" className='search' onClick={handleSearch}>
            <img src={search_icon} alt="Search" />
          </button>
        </div>
      </header>

      <main className="book-list">
        <h2 className="book-list-title">Available Books</h2>
        <div className="book-items-container2">
          {(filteredBooks.length > 0 ? filteredBooks : Array(10).fill({ name, Category, price, date })).map((book, index) => (
            <div key={index} className="book-item">
              <div className="book-image">
                <img src={book_icon} alt="book" />
              </div>
              <div className="book-description">
                <label>Book Name:</label> <input type='text' value={book.name} disabled /> 
                <label>Book Category:</label> <input type='text' value={book.Category} disabled />
                <label>Price:</label> <input type='text' value={book.price} disabled />
                <label>Posted Date:</label> <input type='text' value={book.date} disabled />
              </div>
            </div>
          ))}
        </div>
      </main>

      {showSidebar && (
        <aside className={`sidebar ${showSidebar ? 'slide-in' : ''}`}>
          <button onClick={handleProfileClick}>Profile</button>
          <button onClick={handlePostYourBookClick}>Post your book</button>
          <button onClick={handleYourPostingsClick}>Your Postings</button>
          <button onClick={handleOrderHistoryClick}>Order History</button>
        </aside>
      )}
    </div>
  );
};
