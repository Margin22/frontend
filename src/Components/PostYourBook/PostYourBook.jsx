import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostYourBook.css';
import book_icon from '../Assets/book.jpg';

export const PostYourBook = () => {
    const navigate = useNavigate();

    // State for each input
    const [bookInfo, setBookInfo] = useState({
        bookName: '',
        authorName: '',
        publicationDate: '',
        publisherName: '',
        edition: '',
        language: '',
        condition: '',
        price: '',
        sellerName: '',
        email: '',
        address: '',
        phone: '',
        deliverable: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookInfo({
            ...bookInfo,
            [name]: value,
        });
    };

    // Function to handle the post
    const handlePost = () => {
        // Simple validation to check if all fields are filled
        if (Object.values(bookInfo).some(value => value.trim() === '')) {
            alert('Please fill out all fields before posting.');
            return;
        }

        // Post data (here you would normally send it to a backend or context)
        console.log('Posted Book Info:', bookInfo);

        // Navigate to HomePage
        navigate('/home');
    };

    return (
        <div className="Post-container">
            <h2>Post your Book</h2>
            <div className="PostYourBook-info1">
                <br></br>
                <img src={book_icon} alt="book"/>
                <br></br>
                <p>Book Name:</p>
                <input type='text' name="bookName" value={bookInfo.bookName} onChange={handleChange} />
                <p>Author's Name:</p>
                <input type='text' name="authorName" value={bookInfo.authorName} onChange={handleChange} />
                <p>Publication Date:</p>
                <input type='text' name="publicationDate" value={bookInfo.publicationDate} onChange={handleChange} />
                <p>Publisher Name:</p>
                <input type='text' name="publisherName" value={bookInfo.publisherName} onChange={handleChange} />
                <p>Edition:</p>
                <input type='text' name="edition" value={bookInfo.edition} onChange={handleChange} />
                <p>Language:</p>
                <input type='text' name="language" value={bookInfo.language} onChange={handleChange} />
                <p>Condition:</p>
                <input type='text' name="condition" value={bookInfo.condition} onChange={handleChange} />
                <p>Price:</p>
                <input type='text' name="price" value={bookInfo.price} onChange={handleChange} />
            </div>
            <br></br>
            <br></br>
            <p>______________________________________________________________________________________________________________________________________________________________________</p>
            <br></br>
            <br></br>
            <div className='PostYourBook-info2'>
                <p>Seller Name:</p>
                <input type='text' name="sellerName" value={bookInfo.sellerName} onChange={handleChange} />
                <p>Email Address:</p>
                <input type='text' name="email" value={bookInfo.email} onChange={handleChange} />
                <p>Address:</p>
                <input type='text' name="address" value={bookInfo.address} onChange={handleChange} />
                <p>Phone No.:</p>
                <input type='text' name="phone" value={bookInfo.phone} onChange={handleChange} />
                <p>Deliverable? (yes/no):</p>
                <input type='text' name="deliverable" value={bookInfo.deliverable} onChange={handleChange} />
            </div>
            
            <button onClick={handlePost} className="post-button">Post</button>
        </div>
    );
};
