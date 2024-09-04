import React, { useEffect, useRef } from 'react';
import '../styles/components/WelcomeSection.css';
import firstImg from '../assets/images/firstImg.jpg';
import secondImg from '../assets/images/pastor_preach2.jpg';
import thirdImg from '../assets/images/thirdImg.jpg';

const WelcomeSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, options);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  const cards = [
    {
      image: firstImg,
      title: "I'm New",
      description: "We are glad you are here! We look forward to connecting with you.",
      link: "Plan a Visit",
      url: "#"
    },
    {
      image: secondImg,
      title: "Connect With A Pastor",
      description: "Our team of Pastors are here to answer any of your questions or provide more info about our church.",
      link: "Get Connected",
      url: "#"
    },
    {
      image: thirdImg,
      title: "Join Our Charity Team",
      description: "We place a high value in creating a community with more opportunities through tech empowerment. Find a group that is right for you.",
      link: "View Groups",
      url: "#"
    }
  ];

  return (
    <section className="welcome-section" ref={sectionRef}>
      <div className="welcome-underlay top">
        you are always welcome here
      </div>
      <div className="welcome-cards-container">
        <div className="welcome-cards">
          {cards.map((card, index) => (
            <div key={index} className="welcome-card" ref={(el) => (cardsRef.current[index] = el)}>
              <img src={card.image} alt={card.title} />
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a href={card.url}>{card.link}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="welcome-underlay bottom">
        you are always welcome here
      </div>
    </section>
  );
};

export default WelcomeSection;