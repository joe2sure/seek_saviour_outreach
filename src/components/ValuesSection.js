import React, { useEffect, useRef } from 'react';
import '../styles/components/ValuesSection.css';

const ValuesSection = () => {
  const sectionRef = useRef(null);
  const valuesRef = useRef([]);

  const values = [
    {
      number: '01',
      title: 'Jesus is who we love',
      description: 'The purpose of Seek the saviour gospel outreach is to share hope and the love of Jesus to all. Jesus is who we love because he first loved us. Everything that we do is for Jesus.'
    },
    {
      number: '02',
      title: 'People is who we serve',
      description: 'Many people have the misconception that being "called" by God is something only missionaries, pastors, nuns, and other church leaders experience.'
    },
    {
      number: '03',
      title: 'Honor is our expression',
      description: 'We are saved by serving, but we are saved for serving. You were called to be free. You cannot serve God until you\'ve been set free by Jesus.'
    },
    {
      number: '04',
      title: 'Faith guides our actions',
      description: 'Our faith in God is the foundation of everything we do. It drives us to serve others, spread love, and make a positive impact in our community.'
    },
    {
      number: '05',
      title: 'Community strengthens us',
      description: 'We believe in the power of community. Together, we support each other, grow in faith, and create a welcoming environment for all.'
    },
    {
      number: '06',
      title: 'Compassion drives us',
      description: 'Compassion is at the heart of our mission. We strive to show God\'s love through acts of kindness, empathy, and support for those in need.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    valuesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      valuesRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="values-section">
      <div className="values-header">
        <h1>Our Values</h1>
        <span className="underlay-text">beliefs that unit us</span>
      </div>
      <div className="values-grid">
        {values.map((value, index) => (
          <div
            key={index}
            className="value-item"
            ref={(el) => (valuesRef.current[index] = el)}
          >
            <h2>{value.number}</h2>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;