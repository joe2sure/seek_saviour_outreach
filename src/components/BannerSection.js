import React from 'react';
import '../styles/components/BannerSection.css';

const BannerSection = () => {
  return (
    <div className="banner-section">
      <div className="banner-content">
        <div className="left-content">
          <h1>A place where you belong</h1>
          <p className="service-time">
            Join us every Sunday at 10:40 AM in Person + Online
          </p>
        </div>
        <div className="right-content">
          <div className="watch-live-circle">
            <span>Watch us live</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerSection;
