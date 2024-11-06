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
        Category: '',
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
        <div className="background">
             <div className="Post-container">
                     <h2>Post your Book</h2>
            <div className="PostYourBook-info1">
                <br></br>
                <img src={book_icon} alt="book"/>
                <br></br>
                <p><b>Book Name:</b></p>
                <input type='text' name="bookName" value={bookInfo.bookName} onChange={handleChange} />
                <p><b>Author's Name:</b></p>
                <input type='text' name="authorName" value={bookInfo.authorName} onChange={handleChange} />
                <p><b>Publication Date:</b></p>
                <input type='text' name="publicationDate" value={bookInfo.publicationDate} onChange={handleChange} />
                <p><b>Publisher Name:</b></p>
                <input type='text' name="publisherName" value={bookInfo.publisherName} onChange={handleChange} />
                <p><b>Edition:</b></p>
                <input type='text' name="edition" value={bookInfo.edition} onChange={handleChange} />
                <p><b>Category:</b></p>
                <input type='text' name="Category" value={bookInfo.Category} onChange={handleChange} />
                <p><b>Language:</b></p>
                <input type='text' name="language" value={bookInfo.language} onChange={handleChange} />
                <p><b>Condition:</b></p>
                <input type='text' name="condition" value={bookInfo.condition} onChange={handleChange} />
                <p><b>Price:</b></p>
                <input type='text' name="price" value={bookInfo.price} onChange={handleChange} />
            </div>
            <br></br>
            <br></br>
            <p>______________________________________________________________________________________________________________________________________________________________________</p>
            <br></br>
            <br></br>
            <div className='PostYourBook-info2'>
                <p><b>Seller Name:</b></p>
                <input type='text' name="sellerName" value={bookInfo.sellerName} onChange={handleChange} />
                <p><b>Email Address:</b></p>
                <input type='text' name="email" value={bookInfo.email} onChange={handleChange} />
                <p><b>Address:</b></p>
                <input type='text' name="address" value={bookInfo.address} onChange={handleChange} />
                <p><b>Phone No.:</b></p>
                <input type='text' name="phone" value={bookInfo.phone} onChange={handleChange} />
                <p><b>Deliverable? (yes/no):</b></p>
                <input type='text' name="deliverable" value={bookInfo.deliverable} onChange={handleChange} />
            </div>
            
            <button onClick={handlePost} className="post-button">Post</button>
        </div>
    </div>
    );
};
