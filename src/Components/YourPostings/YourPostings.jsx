import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./YourPostings.css";
import book_icon from "../Assets/book.jpg";

export const YourPostings = () => {
  const [postedBooks, setPostedBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      axios
        .get("http://localhost:8000/api/user/books", {
          headers: {
            Authorization: `Bearer ${token}`, // Make sure the token is being sent
          },
        })
        .then((response) => {
          setPostedBooks(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user's postings:", error);
        });
    } else {
      console.error("No access token found in localStorage.");
    }
  }, []);
  

  const handleBookClick = (book) => {
    navigate("/yourbookdetails", { state: book });
  };

  return (
    <div className="Background600">
      <div className="book-items-container600">
        <h2>Your Postings</h2>
        {postedBooks.length > 0 ? (
          postedBooks.map((book) => (
            <div key={book.id} className="book-item600" onClick={() => handleBookClick(book)}>
              <div className="book-image600">
                <img src={book_icon} alt="book" />
              </div>
              <div className="book-description600">
                <label><b>Book Name:</b></label>
                <input type="text" value={book.title} disabled />
                <label><b>Category:</b></label>
                <input type="text" value={book.category} disabled />
                <label><b>Price:</b></label>
                <input type="text" value={book.price} disabled />
                <label><b>Posted Date:</b></label>
                <input type="text" value={book.publication_date} disabled />
              </div>
            </div>
          ))
        ) : (
          <p>No books found in your postings.</p>
        )}
        <button onClick={() => navigate('/home')} className="back-button600">Back to Home</button>
      </div>
    </div>
  );
};
