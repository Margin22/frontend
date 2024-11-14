import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookDescription.css';
import book_icon from '../Assets/book.jpg';

export const BookDescription = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    title, author, publication_date, publisher_name, edition, category,
    language, condition, price, seller
  } = location.state || {};

  return (
    <div className="background">
      <div className="Post-container">
        <h2>Book Description</h2>
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
      </div>
    </div>
  );
};
