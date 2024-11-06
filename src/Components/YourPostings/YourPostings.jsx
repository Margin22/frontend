import React from "react";
import "./YourPostings.css";
import book_icon from "../Assets/book.jpg";
import { useLocation, useNavigate } from "react-router-dom";
export const YourPostings = () => {
    const location = useLocation();   
    const navigate =  useNavigate();
const { price, date, name, Category } = location.state || {};

return (
<div className="Background2">
<div className="book-items-container">
<h2>Your Postings</h2>
  {[...Array(10)].map((_, index) => (
    <div key={index} className="book-item">
      <div className="book-image"> <img src={book_icon} alt='book'/></div>
      <div className="book-description"><label>Posted Date:</label> <input type='text' value={date} disabled />
      <label><b>Book Name:</b></label> <input type='text' value={name} disabled /> 
      <label><b>Price:</b></label> <input type='text' value={price} disabled />
      <label><b>Book Category:</b></label> <input type= 'text' value={Category} disabled />
      </div>
    </div>
  ) )}
  <button onClick={() => navigate('/home')} className="back-button">Back to Home</button>
</div>
</div>
)
}