import React from "react";
import "./OrderHistory.css";
import book_icon from "../Assets/book.jpg";
import { useLocation, useNavigate } from "react-router-dom";
export const OrderHistory = () => {
    const location = useLocation();   
    const navigate =  useNavigate();
const { price, date, name, Category } = location.state || {};

return (
<div className="Background3">
<div className="book-items-container">
<h2>Order History</h2>
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