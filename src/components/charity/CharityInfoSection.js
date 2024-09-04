import React from 'react';
import { Heart, Globe, Handshake, Target, Eye } from 'lucide-react';
import '../../styles/components/charity/CharityInfoSection.css';
import charityInfoImg from '../../assets/images/charity/charity-info-img.jpg';

const CharityInfoSection = () => {
  const cards = [
    {
      icon: Heart,
      color: '#FFD700',
      title: 'Become a Volunteer',
      description: 'Join our team of dedicated volunteers and make a direct impact in the lives of those in need.',
    },
    {
      icon: Globe,
      color: '#40E0D0',
      title: 'Fundraise',
      description: 'Help us raise the necessary funds to support our projects and bring positive change worldwide.',
    },
    {
      icon: Handshake,
      color: '#FF6347',
      title: 'Donate',
      description: 'Your generosity can provide hope and essential resources to those who need them the most.',
    },
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
            <h4>Welcome to Charius</h4>
            <h2>Be the Hope in Someone's Life</h2>
            <p>
              At Charius, we are committed to making a difference by empowering communities and supporting those in need. 
              Every small effort counts, and together we can create a brighter future for all.
            </p>
            <div className="charity-info-goals">
              <div className="charity-goal">
                <div className="charity-goal-icon">
                  <Target size={24} />
                </div>
                <div className="charity-goal-text">
                  <h5>Our Mission</h5>
                  <p>To provide essential support and create sustainable opportunities for vulnerable communities.</p>
                </div>
              </div>
              <div className="charity-goal">
                <div className="charity-goal-icon">
                  <Eye size={24} />
                </div>
                <div className="charity-goal-text">
                  <h5>Our Vision</h5>
                  <p>To envision a world where everyone has access to the opportunities they need to thrive.</p>
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