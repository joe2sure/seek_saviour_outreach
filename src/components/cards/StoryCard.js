import React from 'react';

const StoryCard = ({ image, category, date, title }) => (
  <div className="story-card">
    <img src={image} alt={title} className="story-image" />
    <div className="story-content">
      <div className="story-meta">
        <button className="story-category">{category}</button>
        <span className="story-date">{date}</span>
      </div>
      <h3 className="story-title">{title}</h3>
      <a href="#" className="story-link">Read More</a>
    </div>
  </div>
);

export default StoryCard;