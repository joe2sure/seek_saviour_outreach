import React from 'react';
import '../styles/components/BeliefSection.css';
import homeImg1 from '../assets/images/homeImg1.jpg';
// import homepageVideo1 from '../assets/videos/homepageVideo1';

const BeliefsSection = () => {
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
        <video controls>
          {/* <source src='../assets/videos/homepageVideo1' type="video/quicktime" /> */}
          <source src="../assets/videos/beliefSectionVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default BeliefsSection;