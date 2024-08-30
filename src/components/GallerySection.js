import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

import '../styles/components/GallerySection.css';
import img1 from '../assets/images/img_ppl1.jpg';
import img2 from '../assets/images/img_ppl2.jpg';
import vid1 from '../assets/videos/pastor_wife_video1.mp4';
import vid2 from '../assets/videos/church_video1.mp4';

const GallerySection = () => {
    const scrollRef = useRef(null);
    const [playingVideo, setPlayingVideo] = useState(null);
  
    useEffect(() => {
      const scrollContainer = scrollRef.current;
      if (scrollContainer) {
        const scrollWidth = scrollContainer.scrollWidth;
        const animateScroll = () => {
          if (scrollContainer.scrollLeft >= scrollWidth - scrollContainer.clientWidth) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 1;
          }
        };
        const intervalId = setInterval(animateScroll, 30);
        return () => clearInterval(intervalId);
      }
    }, []);
  
    const toggleVideo = (index) => {
      setPlayingVideo(prevIndex => prevIndex === index ? null : index);
    };

  const cards = [
    { type: 'image', src: img1, alt: 'Image 1' },
    { type: 'video', src: vid1, alt: 'Video 1' },
    { type: 'image', src: img2, alt: 'Image 2' },
    { type: 'video', src: vid2, alt: 'Video 2' },
    { type: 'image', src: img2, alt: 'Image 3' },
  ];

  return (
    <section className="gallery-section">
      <div className="container">
        <h1>Our Gallery</h1>
        <div ref={scrollRef} className="gallery-container">
          {cards.map((card, index) => (
            <div key={index} className="gallery-card">
              {card.type === 'image' ? (
                <img src={card.src} alt={card.alt} />
              ) : (
                <div className="video-container">
                  <video 
                    src={card.src} 
                    loop 
                    muted 
                    playsInline
                    ref={el => {
                      if (el) {
                        el.playing = playingVideo === index;
                        if (el.playing) {
                          el.play();
                        } else {
                          el.pause();
                        }
                      }
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                  <button className="play-button" onClick={() => toggleVideo(index)}>
                    {playingVideo === index ? <Pause size={24} /> : <Play size={24} />}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default GallerySection;