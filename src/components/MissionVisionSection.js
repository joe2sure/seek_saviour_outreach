import React from 'react';
import { Heart, Globe, Handshake, Target, Eye } from 'lucide-react';
import '../styles/components/MissionVisionSection.css';
import missionVisionImg from '../assets/images/mission-vision-img.jpg';

const MissionVisionSection = () => {


  return (
    <section className="charity-info-section">
      <div className="charity-info-container">
        {/* <div className="charity-card-row">
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
        </div> */}
        <div className="charity-info-content">
          <div className="charity-info-image">
            <img src={missionVisionImg} alt="Charity in action" className="charity-image" />
          </div>
          <div className="charity-info-text">
            <h4>Welcome to Seek The Saviour Gospel Outreach</h4>
            <h2>You are welcome to a family where faith produces results through love demonstrated in care, commitment and excellence</h2>
            <p>
              At SSGO, we are committed to making a difference by demonstrating the love of God 
              through words of affirmation, giving of gifts, Visiting the vulnerable and offering of 
              Scholarship to those who can not afford the basic education in Africa.
            </p>
            <div className="charity-info-goals">
              <div className="charity-goal">
                <div className="charity-goal-icon">
                  <Target size={24} />
                </div>
                <div className="charity-goal-text">
                  <h5>Our Mission</h5>
                  <p>To reach out to Souls, develop people into Christ’s likeness and manifest his love on Earth</p>
                </div>
              </div>
              <div className="charity-goal">
                <div className="charity-goal-icon">
                  <Eye size={24} />
                </div>
                <div className="charity-goal-text">
                  <h5>Our Vision</h5>
                  <p>To raise champion for Jesus that will impact the world</p>
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

export default MissionVisionSection;