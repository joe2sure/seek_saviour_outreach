import React from 'react';
import { Heart } from 'lucide-react';
import '../../styles/components/charity/CharityDonationCTA.css';

const CharityDonationCTA = () => {
  return (
    <section className="charity-donation-cta">
      <div className="charity-donation-overlay">
        <div className="charity-donation-content">
          <div className="charity-donation-icon">
            <Heart size={62} />
          </div>
          <h2 className="charity-donation-subtitle">Help us raise them up.</h2>
          <div className="charity-donation-title">
            <h1>Your donation means a lot to them.</h1>
            <h1>Donate what you can.</h1>
          </div>
          <button className="charity-donation-button">Start Donating Now</button>
        </div>
      </div>
    </section>
  );
};

export default CharityDonationCTA;