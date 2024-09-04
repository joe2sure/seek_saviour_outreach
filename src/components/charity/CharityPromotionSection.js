import React from 'react';
import '../../styles/components/charity/CharityPromotionSection.css';
import image1 from '../../assets/images/bible.jpg';
import image2 from '../../assets/images/faithImg.jpg';
import image3 from '../../assets/images/baptismImg.jpg';
import charityPromotionImg from '../../assets/images/charity/charity-promotion-img.jpg';

const CharityPromotionSection = () => {
  // Array of card data with color values for progress bars
  const cardData = [
    {
      image: image1,
      title: 'The Thirsty are Waiting For Your Help',
      description: 'Provide clean water to communities in need. Your donation can save lives and improve health.',
      raised: 8000,
      goal: 10000,
      color: '#F99126', // Color for progress bar
    },
    {
      image: image2,
      title: 'Education for Every Child',
      description: 'Help us build schools and provide educational resources to underprivileged children.',
      raised: 15000,
      goal: 20000,
      color: '#40E0D0', // Color for progress bar
    },
    {
      image: image3,
      title: 'Feeding the Hungry',
      description: 'Support our food banks and meal programs to combat hunger in local communities.',
      raised: 12000,
      goal: 18000,
      color: '#FF6347', // Color for progress bar
    },
  ];

  return (
    <section className="charity-promotion-section">
      <div className="charity-promotion-top">
        <div className="charity-promotion-image">
          <img src={charityPromotionImg} alt="Promoting child safety" className="main-image" />
        </div>
        <div className="charity-promotion-content">
          <h2>Promoting The Safety and Rights of Children</h2>
          <p>
            We're dedicated to ensuring every child has a safe environment to grow, learn, and thrive. Your support makes a
            real difference in protecting vulnerable children worldwide.
          </p>
          <div className="charity-promotion-progress">
            <div className="progress-indicator">90%</div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '90%', backgroundColor: '#F99126' }}></div>
            </div>
            <div className="progress-stats">
              <span>Raised: £24,808.00</span>
              <span>Goal: £26,000.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="charity-promotion-cards">
        {cardData.map((card, index) => (
          <div key={index} className="charity-card">
            <div className="charity-card-image">
              <img src={card.image} alt={card.title} className="card-image" />
            </div>
            <div className="charity-card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div className="charity-card-progress">
                <div className="progress-bar">
                  {/* Dynamically setting the width and color of the progress bar */}
                  <div
                    className="progress"
                    style={{ width: `${(card.raised / card.goal) * 100}%`, backgroundColor: card.color }}
                  ></div>
                </div>
                <div className="progress-stats">
                  <span>Raised: {card.raised}</span>
                  <span>Goal: {card.goal}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CharityPromotionSection;
