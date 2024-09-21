import React from 'react';
import '../styles/components/BannerSection.css';

const BannerSection = () => {
  return (
    <div className="banner-section">
      <div className="banner-content">
        <div className="left-content">
          <h1>
          Welcome to our family of love!
          {/* It is a pleasure to have you here.  */}
          </h1>
          <p className="service-time">
            Join us every Sunday and wednesday in Person + Online
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
