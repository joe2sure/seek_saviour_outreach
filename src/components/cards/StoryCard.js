import React from 'react';
import { Link } from 'react-router-dom';

const StoryCard = ({ image, category, date, title, slug }) => (
  <div className="story-card">
    <img src={image} alt={title} className="story-image" />
    <div className="story-content">
      <div className="story-meta">
        <button className="story-category">{category}</button>
        <span className="story-date">{date}</span>
      </div>
      <h3 className="story-title">{title}</h3>
      <Link to={`/story/${slug || 'default'}`} className="story-link">
        Read More
      </Link>
    </div>
  </div>
);

export default StoryCard;




// import React from 'react';

// const StoryCard = ({ image, category, date, title }) => (
//   <div className="story-card">
//     <img src={image} alt={title} className="story-image" />
//     <div className="story-content">
//       <div className="story-meta">
//         <button className="story-category">{category}</button>
//         <span className="story-date">{date}</span>
//       </div>
//       <h3 className="story-title">{title}</h3>
//       <button className="story-link">Read More</button>
//     </div>
//   </div>
// );

// export default StoryCard;