import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './YourBookDetails.css';
import book_icon from '../Assets/book.jpg';
import axios from 'axios';

export const YourBookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    id,title, author, publication_date, publisher_name, edition, category,
    language, condition, price, seller
  } = location.state || {};

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(`http://localhost:8000/api/books/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include JWT token in headers
        },
      });
      // Redirect to the user's postings or homepage after deletion
      navigate('/YourPostings');
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  return (
    <div className="background">
      <div className="Post-container">
        <h2>Your Book Details</h2>
        <div className="PostYourBook-info1">
          <br />
          <img src={book_icon} alt="book" />
          <br />
          <p><b>Book Name:</b></p>
          <input type='text' value={title} disabled />
          <p><b>Author's Name:</b></p>
          <input type='text' value={author} disabled />
          <p><b>Publication Date:</b></p>
          <input type='text' value={publication_date} disabled />
          <p><b>Publisher Name:</b></p>
          <input type='text' value={publisher_name} disabled />
          <p><b>Edition:</b></p>
          <input type='text' value={edition} disabled />
          <p><b>Category:</b></p>
          <input type='text' value={category} disabled />
          <p><b>Language:</b></p>
          <input type='text' value={language} disabled />
          <p><b>Condition:</b></p>
          <input type='text' value={condition} disabled />
          <p><b>Price:</b></p>
          <input type='text' value={price} disabled />
        </div>
        
        <div className="PostYourBook-info2">
          <p><b>Seller Name:</b></p>
          <input type='text' value={seller?.name} disabled />
          <p><b>Email Address:</b></p>
          <input type='text' value={seller?.email} disabled />
          <p><b>Address:</b></p>
          <input type='text' value={seller?.address} disabled />
          <p><b>Phone No.:</b></p>
          <input type='text' value={seller?.phone} disabled />
          <p><b>Deliverable? (yes/no):</b></p>
          <input type='text' value={seller?.available_to_deliver ? 'Yes' : 'No'} disabled />
        </div>

        <button onClick={() => navigate('/home')} className="back-button">Back to Home</button>
        <button onClick={handleDelete} className="Delete">Delete</button> {/* Updated delete button */}
      </div>
 </div>
 );
};
