import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostYourBook.css';

const PostYourBook = () => {
  const navigate = useNavigate();
  const [sellerInfo, setSellerInfo] = useState(null);
  const [bookInfo, setBookInfo] = useState({
    sellerName: '',
    email: '',
    address: '',
    phone: '',
    deliverable: 'yes',
    bookName: '',
    authorName: '',
    publicationDate: '',
    publisherName: '',
    edition: '',
    category: '',
    language: '',
    condition: '',
    price: '',
  });
  
  useEffect(() => {
    const fetchSeller = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          alert('User not authenticated. Please log in.');
          return;
        }
  
        const response = await fetch('http://localhost:8000/api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (!response.ok) {
          console.log('User details fetch response:', await response.text());
          alert('Failed to fetch user details.');
          return;
        }
  
        const userData = await response.json();
  
        const sellerResponse = await fetch('http://localhost:8000/api/sellers/detail/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (sellerResponse.status === 404) {
          console.log("No seller profile found; setting up for new seller input.");
          setSellerInfo(null); // Allows user to fill in the form
        } else if (!sellerResponse.ok) {
          const errorText = await sellerResponse.text();
          console.log('Seller details fetch error:', errorText);
          alert('Failed to fetch seller details. Please try again or contact support.');
        } else {
          const sellerData = await sellerResponse.json();
          setSellerInfo(sellerData);
          setBookInfo((prevInfo) => ({
            ...prevInfo,
            sellerName: sellerData.name,
            email: sellerData.email,
            address: sellerData.address,
            phone: sellerData.phone,
            deliverable: sellerData.available_to_deliver ? 'yes' : 'no',
          }));
        }
      } catch (error) {
        console.error('Error fetching seller:', error);
      }
    };
  
    fetchSeller();
  }, []);

  const handlePost = async () => {
    if (Object.values(bookInfo).some(value => value.trim() === '')) {
      alert('Please fill out all fields before posting.');
      return;
    }

    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        alert('User not authenticated. Please log in.');
        return;
      }

      // Step 1: Check if seller exists and create one if necessary
      let sellerId = sellerInfo?.id;
      if (!sellerInfo) {
        const sellerResponse = await fetch('http://localhost:8000/api/sellers/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: bookInfo.sellerName,
            email: bookInfo.email,
            address: bookInfo.address,
            phone: bookInfo.phone,
            available_to_deliver: bookInfo.deliverable.toLowerCase() === 'yes',
          }),
        });

        if (!sellerResponse.ok) {
          throw new Error('Failed to create seller');
        }

        const sellerData = await sellerResponse.json();
        sellerId = sellerData.id;
      }

      // Step 2: Create the book using fetch
      const bookResponse = await fetch('http://localhost:8000/api/books/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: bookInfo.bookName,
          author: bookInfo.authorName,
          publication_date: bookInfo.publicationDate,
          publisher_name: bookInfo.publisherName,
          edition: bookInfo.edition,
          category: bookInfo.category,
          language: bookInfo.language,
          condition: bookInfo.condition,
          price: parseFloat(bookInfo.price),
          seller: sellerId,
        }),
      });

      if (!bookResponse.ok) {
        throw new Error('Failed to create book');
      }

      alert('Book posted successfully!');
      navigate('/home');
    } catch (error) {
      console.error('Error posting book:', error);
      alert('Failed to post book. Please check the form and try again.');
    }
  };

  return (
    <div className="background800">
      <div className="Post-container800">
        <h2>Post Your Book</h2>
        <form onSubmit={(e) => e.preventDefault()}>

          {/* Seller Info - Editable if New User */}
          <div className="PostYourBook-info1800">
            <p><strong>Seller Name</strong></p>
            <input
              type="text"
              value={bookInfo.sellerName}
              readOnly={!!sellerInfo} // Editable if no seller info
              onChange={(e) => setBookInfo({ ...bookInfo, sellerName: e.target.value })}
            />
          </div>

          <div className="PostYourBook-info1800">
            <p><strong>Email</strong></p>
            <input
              type="email"
              value={bookInfo.email}
              readOnly={!!sellerInfo} // Editable if no seller info
              onChange={(e) => setBookInfo({ ...bookInfo, email: e.target.value })}
            />
          </div>

          <div className="PostYourBook-info1800">
            <p><strong>Address</strong></p>
            <input
              type="text"
              value={bookInfo.address}
              readOnly={!!sellerInfo} // Editable if no seller info
              onChange={(e) => setBookInfo({ ...bookInfo, address: e.target.value })}
            />
          </div>

          <div className="PostYourBook-info1800">
            <p><strong>Phone</strong></p>
            <input
              type="text"
              value={bookInfo.phone}
              readOnly={!!sellerInfo} // Editable if no seller info
              onChange={(e) => setBookInfo({ ...bookInfo, phone: e.target.value })}
            />
          </div>

          <div className="PostYourBook-info1800">
            <p><strong>Available to Deliver</strong></p>
            <input
              type="text"
              value={bookInfo.deliverable}
              readOnly={!!sellerInfo} // Editable if no seller info
              onChange={(e) => setBookInfo({ ...bookInfo, deliverable: e.target.value })}
            />
          </div>

          {/* Book Info Fields */}
          <div className="PostYourBook-info2800">
            <p><strong>Book Name</strong></p>
            <input
              type="text"
              value={bookInfo.bookName}
              onChange={(e) => setBookInfo({ ...bookInfo, bookName: e.target.value })}
            />
          </div>

          <div className="PostYourBook-info2800">
            <p><strong>Author Name</strong></p>
            <input
              type="text"
              value={bookInfo.authorName}
              onChange={(e) => setBookInfo({ ...bookInfo, authorName: e.target.value })}
            />
          </div>

          <div className="PostYourBook-info2800">
            <p><strong>Publication Date</strong></p>
            <input
              type="date"
              value={bookInfo.publicationDate}
              onChange={(e) => setBookInfo({ ...bookInfo, publicationDate: e.target.value })}
            />
          </div>

          <div className="PostYourBook-info2800">
            <p><strong>Publisher Name</strong></p>
            <input
              type="text"
              value={bookInfo.publisherName}
              onChange={(e) => setBookInfo({ ...bookInfo, publisherName: e.target.value })}
            />
          </div>

          <div className="PostYourBook-info2800">
            <p><strong>Edition</strong></p>
            <input
              type="text"
              value={bookInfo.edition}
              onChange={(e) => setBookInfo({ ...bookInfo, edition: e.target.value })}
            />
          </div>

          <div className="PostYourBook-info2800">
            <p><strong>Category</strong></p>
            <input
              type="text"
              value={bookInfo.category}
              onChange={(e) => setBookInfo({ ...bookInfo, category: e.target.value })}
            />
          </div>

          <div className="PostYourBook-info2800">
            <p><strong>Language</strong></p>
            <input
              type="text"
              value={bookInfo.language}
              onChange={(e) => setBookInfo({ ...bookInfo, language: e.target.value })}
            />
          </div>

          <div className="PostYourBook-info2800">
            <p><strong>Condition</strong></p>
            <input
              type="text"
              value={bookInfo.condition}
              onChange={(e) => setBookInfo({ ...bookInfo, condition: e.target.value })}
            />
          </div>

          <div className="PostYourBook-info2800">
            <p><strong>Price</strong></p>
            <input
              type="number"
              value={bookInfo.price}
              onChange={(e) => setBookInfo({ ...bookInfo, price: e.target.value })}
            />
          </div>

          <button type="button" className="Post-your-book-button800" onClick={handlePost}>
            Post Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostYourBook;
