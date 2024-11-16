import React from 'react';
import { useLocation } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const { title, price, seller } = location.state || {};

  const handlePayment = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/initiate-payment/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, price, seller })
      });
      const data = await response.json();
      if (data.payment_url) {
        window.location.href = data.payment_url;
      }
    } catch (error) {
      console.error('Payment initiation failed', error);
    }
  };
  

  return ( <div className="background2000">
    <div className="checkout-container2000">
      <h2>Checkout</h2>
      <p><b>Book:</b> {title}</p>
      <p><b>Price:</b> ${price}</p>
      <button onClick={handlePayment} className="pay-button2000">Proceed to Payment</button>
    </div>
    </div>
  );
};

export default Checkout;
