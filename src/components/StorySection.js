import React, { useRef, useEffect, useState } from 'react';
import StoryCard from './cards/StoryCard';
import { stories } from '../db/storiesData';
import '../styles/components/StoriesSection.css';

const StoriesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Use a setTimeout to ensure the ref is set before calling handleScroll
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 0);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className={`stories-section ${isVisible ? 'animate' : ''}`} ref={sectionRef}>
      <div className="stories-header">
        <h2>Stories & Articles</h2>
        <span className="underlay-text">Find inspiration in God</span>
      </div>
      <div className="stories-grid">
        {stories.map((story, index) => (
          <StoryCard key={index} {...story} />
        ))}
      </div>
    </section>
  );
};

export default StoriesSection;