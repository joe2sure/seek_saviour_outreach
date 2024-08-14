import React, { useEffect, useRef } from 'react';
import '../styles/components/MissionStatement.css';

const MissionStatement = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="mission-statement">
      <h2 className="mission-title">
        A church that believes in Jesus, a <span className="highlight">church that impact all and sundry</span> through God's Word
      </h2>
      <p className="mission-description">
        Overwhelmed by the gift of salvation we found in Jesus, we have a heart for authentic worship, are passionate about establishing God's kingdom across the earth
      </p>
    </section>
  );
};

export default MissionStatement;