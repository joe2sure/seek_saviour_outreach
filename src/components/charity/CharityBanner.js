import React, { useState } from 'react';
import { Play, Heart } from 'lucide-react';
import '../../styles/components/charity/CharityBanner.css';
import bannerImg1 from '../../assets/images/charity/bannerImg1.jpg';
import charityBannerVid from '../../assets/videos/video_small2.mp4';

// Import the volunteer avatar images
import avatar1 from '../../assets/images/charity/avatars/volunteer1.jpg';
import avatar2 from '../../assets/images/charity/avatars/volunteer2.jpg';
import avatar3 from '../../assets/images/charity/avatars/volunteer3.jpg';
import avatar4 from '../../assets/images/charity/avatars/volunteer4.jpg';
import avatar5 from '../../assets/images/charity/avatars/volunteer2.jpg';
import avatar6 from '../../assets/images/charity/avatars/volunteer3.jpg';

const CharityBanner = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = (event) => {
    const button = event.target.closest('.charity-play-button');
    const video = button.previousElementSibling;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Array of volunteer avatars
  const volunteerAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

  return (
    <section className="charity-banner-section">
      <div className="charity-container">
        <div className="charity-banner-content">
          <div className="charity-left-column">
            <h2 className="charity-slogan">Give them a chance.</h2>
            <h1 className="charity-headline">Believe in The Better Future of Others.</h1>
            <p className="charity-description">
              Your support can transform lives. Together, we can provide essential resources, education, and opportunities to those in need. Let's make a difference one step at a time.
            </p>
            <div className="charity-video-section">
              <div className="charity-video-container">
                <video src={charityBannerVid} type="video/mp4" loop muted playsInline>
                  Your browser does not support the video tag.
                </video>
                <button className={`charity-play-button ${isPlaying ? 'playing' : ''}`} onClick={toggleVideo}>
                  <Play size={24} />
                </button>
              </div>
              <div className="charity-campaign-info">
                <h3>Join Our Upcoming Campaign</h3>
                <p>Make an impact one piece of clothing at a time to the need of others.</p>
              </div>
            </div>
          </div>
          <div className="charity-right-column">
            <div className="charity-image">
              <img src={bannerImg1} alt="Charity Banner" />
            </div>
            <div className="charity-stats-card">
              <div className="charity-stats-top">
                <div className="charity-stats-icon">
                  <Heart size={24} />
                </div>
                <div className="charity-stats-text">
                  <h3>120+</h3>
                  <p>Happy Volunteers</p>
                </div>
              </div>
              <div className="charity-stats-bottom">
                {volunteerAvatars.map((avatar, index) => (
                  <div key={index} className={`charity-volunteer-avatar charity-avatar-${index + 1}`}>
                    <img src={avatar} alt={`Volunteer ${index + 1}`} className="charity-avatar-image" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharityBanner;
