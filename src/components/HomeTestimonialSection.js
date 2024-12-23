import React, { useState, useEffect } from 'react';
import '../styles/components/HomeTestimonialSection.css';
import img1 from '../assets/images/testimonial/Enobong_testimony.png';
import img2 from '../assets/images/testimonial/okodugba_testimony.png';
import img3 from '../assets/images/testimonial/anamekwe_testimony.png';
import img4 from '../assets/images/testimonial/adewale_testimony.png';
import img5 from '../assets/images/testimonial/linda_testimony.png';
import img6 from '../assets/images/testimonial/oke_testimony.png';
import img7 from '../assets/images/testimonial/ada_testimony.png';

const HomeTestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "Sister Enobong",
      image: img1,
      testimony: {
        topic: "Visa Renewal",
        details: "Sister Enobong, she testify how God came to her rescue since she joined the church. Her visa was about to expire expire and she thought she will going back to Nigeria but God intervened and turned everything around. She has renewed her visa with that of her children and now she believes that God of SEEK THE SAVIOUR GOSPEL OUTREACH HAS ANSWERED HER",
        church: "SEEK THE SAVIOUR GOSPEL OUTREACH"
      }
    },
    {
      id: 2,
      name: "Mr and Mrs Okodugha",
      image: img2,
      testimony: {
        topic: "Employment",
        details: "Mr and Mrs Okodugha testified how God gave her a good job with Sponsorship.",
        church: "SEEK THE SAVIOUR GOSPEL OUTREACH"
      }
    },
    {
      id: 3,
      name: "Mr and Mrs Anamekwe",
      image: img3,
      testimony: {
        topic: "Multiple Blessings",
        details: "Mr and Mrs Anamekwe also testified how God gave him a good job that's without stress and also bless the family with a very good car.",
        church: "SEEK THE SAVIOUR GOSPEL OUTREACH"
      }
    },
    {
      id: 4,
      name: "Mr and Mrs Adewale",
      image: img4,
      testimony: {
        topic: "General Blessings",
        details: "Mr and Mrs Adewale also testified how God assisted him since joining SEEK THE SAVIOUR GOSPEL OUTREACH. God has blessed them in all ramifications",
        church: "SEEK THE SAVIOUR GOSPEL OUTREACH"
      }
    },
    {
      id: 5,
      name: "Sister Linda",
      image: img5,
      testimony: {
        topic: "Divine Protection",
        details: "Sister Linda testified how God secured the life of the husband from the hands of kidnappers.. She is grateful to the church for being there for her",
        church: "SEEK THE SAVIOUR GOSPEL OUTREACH"
      }
    },
    {
      id: 6,
      name: "Mr and Mrs Oke",
      image: img6,
      testimony: {
        topic: "Spiritual Growth",
        details: "Mr and Mrs Oke! He testified how God has used the pastor to mentor and minister to him and now he has decided to become a follower of Christ with members of his family.",
        church: "SEEK THE SAVIOUR GOSPEL OUTREACH"
      }
    },
    {
      id: 7,
      name: "Sister Ada Akpewe",
      image: img7,
      testimony: {
        topic: "Immigration",
        details: "Sister Ada Akpewe testified how God has helped her to switch to another sponsorship visa and now her husband will be coming to join her in the country soon",
        church: "SEEK THE SAVIOUR GOSPEL OUTREACH"
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <h2 className="section-title">Testimonies</h2>
        <div className="testimonial-slider">
          <button onClick={handlePrev} className="nav-button prev-button">&lt;</button>
          <button onClick={handleNext} className="nav-button next-button">&gt;</button>
          <div 
            className="testimonial-track"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-content">
                  <div className="testimonial-header">
                    <h3>{testimonial.name}</h3>
                    <p className="topic">{testimonial.testimony.topic}</p>
                  </div>
                  <p className="testimonial-quote">{testimonial.testimony.details}</p>
                  <p className="church-name">{testimonial.testimony.church}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonialSection;