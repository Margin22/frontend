import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BookDescription.css';
import book_icon from '../Assets/book.jpg';

export const BookDescription = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const { bookName, authorName, publicationDate, publisherName, edition, Category, language, condition, price, sellerName, email, address, phone, deliverable } = location.state || {};

return (
        <div className="background">
                <div className="Post-container">
                    <h2>Book Description</h2>
                    <div className="PostYourBook-info1">
                    <br></br>
                    <img src={book_icon} alt="book"/>
                    <br></br>
                    <p><b>Book Name:</b></p>
                    <input type='text' value={bookName} disabled />
                    <p><b>Author's Name:</b></p>
                    <input type='text' value={authorName} disabled />
                    <p><b>Publication Date:</b></p>
                    <input type='text' value={publicationDate} disabled />
                    <p><b>Publisher Name:</b></p>
                    <input type='text' value={publisherName} disabled />
                    <p><b>Edition:</b></p>
                    <input type='text' value={edition} disabled />
                    <p><b>Category:</b></p>
                    <input type='text' value={Category} disabled />
                    <p><b>Language:</b></p>
                 <input type='text' value={language} disabled />
                    <p><b>Condition:</b></p>
                    <input type='text' value={condition} disabled />
                 <p><b>Price:</b></p>
                    <input type='text' value={price} disabled />
                    </div>
                    <br></br>
                    <br></br>
                    <p>______________________________________________________________________________________________________________________________________________________________________</p>
                    <br></br>
                    <br></br>
                    <div className='PostYourBook-info2'>
                    <p><b>Seller Name:</b></p>
                    <input type='text' value={sellerName} disabled />
                    <p><b>Email Address:</b></p>
                    <input type='text' value={email} disabled />
                    <p><b>Address:</b></p>
                    <input type='text' value={address} disabled />
                    <p><b>Phone No.:</b></p>
                    <input type='text' value={phone} disabled />
                    <p><b>Deliverable? (yes/no):</b></p>
                    <input type='text' value={deliverable} disabled />
                </div>
        
                <button onClick={() => navigate('/home')} className="back-button">Back to Home</button>
            </div>
        </div>
);
}
