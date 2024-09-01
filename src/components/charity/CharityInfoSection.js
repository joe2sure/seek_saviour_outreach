import React from 'react';
import { Heart, Globe, Handshake, Target, Eye } from 'lucide-react';
import '../../styles/components/charity/CharityInfoSection.css';
import charityInfoImg from '../../assets/images/charity/charity-info-img.jpg';

const CharityInfoSection = () => {
  const cards = [
    { icon: Heart, color: '#FFD700', title: 'Become a volunteer', description: 'Alone, I can do little. Together, we can do anything.' },
    { icon: Globe, color: '#40E0D0', title: 'Fundraise', description: 'Small acts, when multiplied, can transform the world.' },
    { icon: Handshake, color: '#FF6347', title: 'Donate', description: 'The greatest good is what we do for one another.' },
  ];

  return (
    <section className="charity-info-section">
      <div className="charity-info-container">
        <div className="charity-card-row">
          {cards.map((card, index) => (
            <div key={index} className="charity-card">
              <div className="charity-card-icon" style={{ backgroundColor: card.color }}>
                <card.icon size={40} color="white" />
              </div>
              <div className="charity-card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="charity-info-content">
        <div className="charity-info-image">
            <img src={charityInfoImg} alt="Charity in action" className="charity-image" />
          </div>
          <div className="charity-info-text">
            <h4>Welcome To Charius</h4>
            <h2>You're the Hope of Others.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="charity-info-goals">
              <div className="charity-goal">
                <div className="charity-goal-icon">
                  <Target size={24} />
                </div>
                <div className="charity-goal-text">
                  <h5>Our Mission</h5>
                  <p>We believe charity is a lifetime investment.</p>
                </div>
              </div>
              <div className="charity-goal">
                <div className="charity-goal-icon">
                  <Eye size={24} />
                </div>
                <div className="charity-goal-text">
                  <h5>Our Vision</h5>
                  <p>We believe charity is a life changing opportunity.</p>
                </div>
              </div>
            </div>
            <button className="charity-discover-button">Discover More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharityInfoSection;