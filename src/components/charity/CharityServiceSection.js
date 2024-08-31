import React from 'react';
import { BookOpen, Droplet, Apple, Stethoscope } from 'lucide-react';
import '../../styles/components/charity/CharityServicesSection.css';

const ServiceCard = ({ icon, title, description, color }) => (
  <div className="charity-service-card">
    <div className="charity-service-icon" style={{ backgroundColor: color }}>
      {icon}
    </div>
    <h3 className="charity-service-title">{title}</h3>
    <p className="charity-service-description">{description}</p>
  </div>
);

const CharityServicesSection = () => {
  const services = [
    {
      icon: <BookOpen size={48} />,
      title: "Kids Education",
      description: "Providing quality education to underprivileged children for a brighter future.",
      color: "#FFD700"
    },
    {
      icon: <Droplet size={48} />,
      title: "Pure Water",
      description: "Ensuring access to clean and safe drinking water for communities in need.",
      color: "#40E0D0"
    },
    {
      icon: <Apple size={48} />,
      title: "Healthy Food",
      description: "Delivering nutritious meals to combat hunger and promote health.",
      color: "#3CB371"
    },
    {
      icon: <Stethoscope size={48} />,
      title: "Medical Care",
      description: "Offering essential healthcare services to those who lack access.",
      color: "#FF6347"
    }
  ];

  return (
    <section className="charity-services-section">
      <div className="charity-container">
        <h2 className="charity-services-subtitle">What We Do</h2>
        <h1 className="charity-services-title">Your Donation Means Another Smile.</h1>
        <div className="charity-services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharityServicesSection;