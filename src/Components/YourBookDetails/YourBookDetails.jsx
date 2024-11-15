import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './YourBookDetails.css';
import book_icon from '../Assets/book.jpg';
import axios from 'axios';

export const YourBookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [bookDetails, setBookDetails] = useState({
    id: location.state?.id,
    title: location.state?.title,
    author: location.state?.author,
    publication_date: location.state?.publication_date,
    publisher_name: location.state?.publisher_name,
    edition: location.state?.edition,
    category: location.state?.category,
    language: location.state?.language,
    condition: location.state?.condition,
    price: location.state?.price,
    seller: location.state?.seller || {}
  });

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(`http://localhost:8000/api/books/${bookDetails.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/YourPostings');
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSellerInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails((prevDetails) => ({
      ...prevDetails,
      seller: {
        ...prevDetails.seller,
        [name]: value,
      },
    }));
  };

  const handleUpdate = async () => {
    try {
      console.log("Attempting to update with the following data:", bookDetails); // Debugging
      const token = localStorage.getItem("accessToken");
      const response = await axios.patch(
        `http://localhost:8000/api/books/${bookDetails.id}/update/`,
        {
          ...bookDetails,          // Sending both book and seller data
          seller: bookDetails.seller,  // Include seller info if you want to update seller data
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
    
      if (response.status === 200) {
        console.log("Update successful:", response.data);
        setIsEditing(false); // Exit edit mode after updating
      } else {
        console.error("Update failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };
  
  return (
    <div className="background200">
      <div className="Post-container200">
        <h2>Your Book Details</h2>
        <div className="PostYourBook-info1200">
          <br />
          <img src={book_icon} alt="book" />
          <br />
          <p><b>Book Name:</b></p>
          <input
            type='text'
            name="title"
            value={bookDetails.title}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
          <p><b>Author's Name:</b></p>
          <input
            type='text'
            name="author"
            value={bookDetails.author}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
          <p><b>Publication Date:</b></p>
          <input
            type='text'
            name="publication_date"
            value={bookDetails.publication_date}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
          <p><b>Publisher Name:</b></p>
          <input
            type='text'
            name="publisher_name"
            value={bookDetails.publisher_name}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
          <p><b>Edition:</b></p>
          <input
            type='text'
            name="edition"
            value={bookDetails.edition}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
          <p><b>Category:</b></p>
          <input
            type='text'
            name="category"
            value={bookDetails.category}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
          <p><b>Language:</b></p>
          <input
            type='text'
            name="language"
            value={bookDetails.language}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
          <p><b>Condition:</b></p>
          <input
            type='text'
            name="condition"
            value={bookDetails.condition}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
          <p><b>Price:</b></p>
          <input
            type='text'
            name="price"
            value={bookDetails.price}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        
        <div className="PostYourBook-info2200">
          <p><b>Seller Name:</b></p>
          <input
            type='text'
            name="name"
            value={bookDetails.seller.name}
            onChange={handleSellerInputChange}
            disabled={!isEditing}
          />
          <p><b>Email Address:</b></p>
          <input
            type='text'
            name="email"
            value={bookDetails.seller.email}
            onChange={handleSellerInputChange}
            disabled={!isEditing}
          />
          <p><b>Address:</b></p>
          <input
            type='text'
            name="address"
            value={bookDetails.seller.address}
            onChange={handleSellerInputChange}
            disabled={!isEditing}
          />
          <p><b>Phone No.:</b></p>
          <input
            type='text'
            name="phone"
            value={bookDetails.seller.phone}
            onChange={handleSellerInputChange}
            disabled={!isEditing}
          />
          <p><b>Deliverable? (yes/no):</b></p>
          <input
            type='text'
            name="available_to_deliver"
            value={bookDetails.seller.available_to_deliver ? 'Yes' : 'No'}
            onChange={(e) => handleSellerInputChange({ target: { name: 'available_to_deliver', value: e.target.value.toLowerCase() === 'yes' } })}
            disabled={!isEditing}
          />
        </div>

        <button onClick={() => navigate('/home')} className="back-button200">Back to Home</button>
        <button onClick={handleDelete} className="Delete200">Delete</button>
        {isEditing ? (
          <button onClick={handleUpdate} className="Update200">Update</button>
        ) : (
          <button onClick={handleEditToggle} className="Edit200">Edit</button>
        )}
      </div>
  </div>
);
};
