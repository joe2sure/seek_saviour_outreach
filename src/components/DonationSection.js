import React, { useState } from 'react';
import '../styles/components/./DonationSection.css';
import donateSectionImg from '../assets/images/donateSectionImg.jpg';

const DonationSection = () => {
  const [amount, setAmount] = useState('100.00');

  const handleAmountClick = (value) => {
    setAmount(value === 'Custom Amount' ? '' : value);
  };

  return (
    <section className="donation-section">
      <div className="donation-container">
        <div className="donation-image">
          <img src={donateSectionImg} alt="Donation" />
        </div>
        <div className="donation-content">
          <h2>Give Today</h2>
          <p>Every time you give to the Temple of God, you're helping fulfill the mission to reach people for Christ.</p>
          
          <div className="notice">
            Notice: Text mode is enabled. While in text mode no live donations are processed.
          </div>
          
          <div className="donation-input">
            <span className="currency-symbol">£</span>
            <input 
              type="text" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)}
              placeholder="100.00"
            />
          </div>
          
          <div className="amount-buttons">
            {['10.00', '25.00', '50.00', '100.00', '250.00', 'Custom Amount'].map((value, index) => (
              <button key={index} onClick={() => handleAmountClick(value)}>
                {value !== 'Custom Amount' ? '£' : ''}{value}
              </button>
            ))}
          </div>
          
          <button className="donate-button">Donate Now</button>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;