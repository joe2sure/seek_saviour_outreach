import React from 'react';
import '../../styles/components/charity/CharityTestimonialSection.css';
import mumImg from '../../assets/images/charity/mum1.jpg';
import sundayImg from '../../assets/images/charity/president-img.png';
import authorImg from '../../assets/images/charity/author.jpg';
import shape from '../../assets/images/charity/shape.png';

const TestimonialItem = ({ content, name, position, imageSrc }) => (
  <div className="testimonial-item">
    <div className="content">
      <div className="icon">
        <i className="flaticon-quote"></i>
      </div>
      <p>{content}</p>
      <div className="shape">
        <img src={shape} alt="shape" width="60" height="38" />
      </div>
    </div>
    <div className="bottom-content">
      <div className="image">
        <img src={imageSrc} alt={name} width="90" height="90" />
      </div>
      <div className="text">
        <h3>{name}</h3>
        <span>{position}</span>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      content: "This is the best agency for non-profit activities. I love their work so much. I wish one day they would remove all the poverty from the world. I will be there when they need.",
      name: "Emmanuel Onwe",
      position: "Founder",
      imageSrc: authorImg
    },
    {
      content: "This is the best agency for non-profit activities. I love their work so much. I wish one day they would remove all the poverty from the world. I will be there when they need.",
      name: "Okoro Sunday",
      position: "President",
      imageSrc: sundayImg
    },
    {
      content: "This is the best agency for non-profit activities. I love their work so much. I wish one day they would remove all the poverty from the world. I will be there when they need.",
      name: "Mrs Peace Onwe",
      position: "Co-Founder",
      imageSrc: mumImg
    }
  ];

  return (
    <section className="testimonial-section section-padding">
      <div className="container">
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;