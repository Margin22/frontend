import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import book_icon from '../Assets/book.jpg';
import search_icon from '../Assets/search_logo.png';
import axios from 'axios';

export const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all books from the backend
    axios.get('http://localhost:8000/api/books/list/')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBookDescriptionClick = (book) => {
    navigate('/bookdescription', { state: book });
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
          <button type="button" className="search">
            <img src={search_icon} alt="Search" />
          </button>
        </div>
      </header>

      <main className="book-list">
        <h2 className="book-list-title">Available Books</h2>
        <div className="book-items-container2">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div
                key={book.id}
                className="book-item"
                onClick={() => handleBookDescriptionClick(book)}
                style={{ cursor: 'pointer' }}
              >
                <div className="book-image">
                  <img src={book_icon} alt="book" />
                </div>
                <div className="book-description">
                  <label>Book Name:</label> <input type="text" value={book.title} disabled />
                  <label>Category:</label> <input type="text" value={book.category} disabled />
                  <label>Price:</label> <input type="text" value={book.price} disabled />
                  <label>Posted Date:</label> <input type="text" value={book.publication_date} disabled />
                </div>
              </div>
            ))
          ) : (
            <p>No books found for "{searchTerm}"</p>
          )}
        </div>
      </main>

      {showSidebar && (
        <aside className={`sidebar ${showSidebar ? 'slide-in' : ''}`}>
          <button onClick={() => navigate('/profile')}>Profile</button>
          <button onClick={() => navigate('/postyourbook')}>Post your book</button>
          <button onClick={() => navigate('/yourpostings')}>Your Postings</button>
        </aside>
      )}
    </div>
  );
};
