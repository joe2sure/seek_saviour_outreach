import React, { useState, useRef } from "react";
import "../styles/components/SermonSection.css";
import pastorPreach1 from "../assets/videos/church-video2.mp4";
import { Play } from "lucide-react";

const SermonSection = () => {
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
          {/* <img src="https://via.placeholder.com/640x360" alt="Sermon video placeholder" />
            <div className="play-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div> */}

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
      </div>
    </section>
  );
};

export default SermonSection;
