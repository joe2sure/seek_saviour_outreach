import React from 'react';
import '../styles/components/SermonSection.css'; // We'll create this CSS file next

const SermonSection = () => {
    return (
      <section className="sermon-section">
        <div className="sermon-container">
          <div className="sermon-content">
            <h3>POWERFUL & LIFE-CHANGING</h3>
            <h2>Watch the latest Sermon</h2>
            <div className="sermon-buttons">
              <button>Sermon Archive</button>
              <button>Youtube Channel</button>
              <button>Podcasts</button>
            </div>
          </div>
          <div className="sermon-video">
            <img src="https://via.placeholder.com/640x360" alt="Sermon video placeholder" />
            <div className="play-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default SermonSection;