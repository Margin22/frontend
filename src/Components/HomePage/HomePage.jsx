import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';
import book_icon from '../Assets/book.jpg';
import search_icon from '../Assets/search_logo.png';
import axios from 'axios';

export const HomePage = () => {
  const [showSidebar700, setShowSidebar700] = useState(false);
  const [searchTerm700, setSearchTerm700] = useState('');
  const [books700, setBooks700] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all books from the backend
    axios.get('http://localhost:8000/api/books/list/')
      .then(response => setBooks700(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);

  const toggleSidebar700 = () => setShowSidebar700(!showSidebar700);
  
  const handleSearchChange700 = (e) => setSearchTerm700(e.target.value);

  const filteredBooks700 = books700.filter(book =>
    book.title.toLowerCase().includes(searchTerm700.toLowerCase())
  );

  const handleBookDescriptionClick700 = (book) => {
    navigate('/bookdescription', { state: book });
  };

  return (
    <div className="homepage700">
      <header className="header700">
        <button onClick={toggleSidebar700} className="bars-icon700">☰</button>
        <div className="search-container700">
          <input
            type="text"
            className="search-bar700"
            placeholder="Search for books"
            value={searchTerm700}
            onChange={handleSearchChange700}
          />
          <button type="button" className="search700">
            <img src={search_icon} alt="Search" />
          </button>
        </div>
      </header>

      <main className="book-list700">
        <h2 className="book-list-title700">Available Books</h2>
        <div className="book-items-container2700">
          {filteredBooks700.length > 0 ? (
            filteredBooks700.map((book) => (
              <div
                key={book.id}
                className="book-item700"
                onClick={() => handleBookDescriptionClick700(book)}
                style={{ cursor: 'pointer' }}
              >
                <div className="book-image700">
                  <img src={book_icon} alt="book" />
                </div>
                <div className="book-description700">
                  <label>Book Name:</label> <input type="text" value={book.title} disabled />
                  <label>Category:</label> <input type="text" value={book.category} disabled />
                  <label>Price:</label> <input type="text" value={book.price} disabled />
                  <label>Posted Date:</label> <input type="text" value={book.publication_date} disabled />
                </div>
              </div>
            ))
          ) : (
            <p>No books found for "{searchTerm700}"</p>
          )}
        </div>
      </main>

      {showSidebar700 && (
        <aside className={`sidebar700 ${showSidebar700 ? 'slide-in700' : ''}`}>
          <button onClick={() => navigate('/profile')}>Profile</button>
          <button onClick={() => navigate('/postyourbook')}>Post your book</button>
          <button onClick={() => navigate('/yourpostings')}>Your Postings</button>
        </aside>
      )}
  </div>
);
};
