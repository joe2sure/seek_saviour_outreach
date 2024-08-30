import React, { useState, useRef } from 'react';
import '../styles/components/BeliefSection.css';
import pastorPreach1 from '../assets/videos/pastor_preach1.mp4'; 
import homeImg1 from '../assets/images/homeImg1.jpg';
import { Play } from 'lucide-react';


const BeliefsSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="beliefs-section">
      <div className="beliefs-content">
        <div className="beliefs-text">
          <h2>BELIEFS THAT UNIT US</h2>
          <h1>Empowered by God to others for Christ</h1>
          <p>Our community makes us unique. They have an energy that reverberates around them. their mission in life is to ensure the wonder in the is not overlooked.</p>
          <button className="more-about-us">More About Us</button>
        </div>
        <div className="beliefs-image">
          <img src={homeImg1} alt="Beliefs" />
        </div>
      </div>

      <div className="join-us">
        <h2>Join us this Sunday</h2>
        <p>10:30AM in person + online. We'd love to see you!</p>
        <div className="join-us-buttons">
          <button className="attend-in-person">Attend Service in Person</button>
          <button className="attend-online">Attend Service Online</button>
        </div>
      </div>


      <div className="video-section">
        <div className="video-container">
          <video ref={videoRef} onClick={togglePlay} controls>
            <source src={pastorPreach1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <button className="play-button" onClick={togglePlay}>
              <Play size={48} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BeliefsSection;