import React, { useRef, useEffect, useState } from 'react';

import '../styles/components/MinistriesSection.css';
import ministrySectionImg from '../assets/images/ministriesSectionImg.jpg';
import youthImg from '../assets/images/youthImg.jpg';
import outReachImg from '../assets/images/outreachImg.jpg';
import leadershipImg from '../assets/images/leadershipImg.jpg';
import lifeGroupImg from '../assets/images/leadershipImg.jpg';
import worshipImg from '../assets/images/worshipImg.jpg';
import charityImg from '../assets/images/charityImg.jpg';
import missionaryImg from '../assets/images/missionaryImg.jpg';
import familyImg from '../assets/images/familyImg.jpg';
import prayerImg from '../assets/images/prayerImg.jpg';

const MinistriesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ministries = [
    { title: 'Youth', image: youthImg },
    { title: 'Outreach', image: outReachImg },
    { title: 'Leadership', image: leadershipImg },
    { title: 'Life Groups', image: lifeGroupImg },
    { title: 'Worship', image: worshipImg },
    { title: 'Charity', image: charityImg },
    { title: 'Missionaries', image: missionaryImg },
    { title: 'Families', image: familyImg },
    { title: 'Prayer', image: prayerImg },
  ];


  const galleryRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        gallery.scrollLeft += 1;
        if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
          gallery.scrollLeft = 0;
        }
      }, 30);
    };

    const stopScroll = () => {
      clearInterval(scrollInterval);
    };

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

    startScroll();
    gallery.addEventListener('mouseenter', stopScroll);
    gallery.addEventListener('mouseleave', startScroll);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    // Use a setTimeout to ensure the ref is set before calling handleScroll
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 0);

    return () => {
      stopScroll();
      gallery.removeEventListener('mouseenter', stopScroll);
      gallery.removeEventListener('mouseleave', startScroll);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className={`ministries-section ${isVisible ? 'animate' : ''}`} ref={sectionRef}>
      <div className="ministries-container">
        <div className="pastors-row">
          <img src={ministrySectionImg} alt="Our Pastors" className="pastors-image" />
          <div className="pastors-content">
            <div className="pastors-title">
              <h2>Our Pastors</h2>
              <h3>Emmanuel & Peace</h3>
            </div>
            <p>Our church has a strong connection to the community and commenced on October 2023. We are a generational contemporary church with a rich history. We really are a place where you can belong and grow! Emmanuel & Peace have two sons, and they believe in rising up the next generation with the wisdom of those who have gone before. Emmanuel & Peace have a practical outlook on life and love in community. It's our passion to see you get connected, grow in your relationship with God and others and live your best life.</p>
            <em>You will love it here!</em>
          </div>
        </div>

        <div className="ministries-intro">
          <div className="ministries-intro-text">
            <h2>Experience. Connect. Grow</h2>
            <p>Join our ministries to get connected through service</p>
          </div>
          <div className="view-all-ministries">
            <span>View All Ministries</span>
          </div>
        </div>

        <div className="ministries-gallery">
          <button className="gallery-nav prev">&lt;</button>
          <div className="gallery-container" ref={galleryRef}>
            {ministries.map((ministry, index) => (
              <div key={index} className="ministry-card">
                <img src={ministry.image} alt={ministry.title} />
                <h3>{ministry.title}</h3>
                <a href="#">Learn More</a>
              </div>
            ))}
          </div>
          <button className="gallery-nav next">&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;