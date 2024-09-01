import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import '../../styles/components/charity/CharityFunFactSection.css';

const FunFactItem = ({ number, text, suffix = '' }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const ref = useRef(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          setKey(prevKey => prevKey + 1); // Force re-render of CountUp
        } else {
          setShouldAnimate(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="fun-fact-item" ref={ref}>
      <div className="fun-fact-info">
        <h3>
          {shouldAnimate ? (
            <CountUp key={key} end={number} duration={2.5} separator="," />
          ) : (
            0
          )}
          {suffix}
        </h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CharityFunFactSection = () => {
  return (
    <section className="fun-fact-section section-padding">
      <div className="container">
        <div className="fun-fact-wrap">
          <div className="fun-fact-row">
            <FunFactItem number={260} text="Total Campaigns" />
            <FunFactItem number={26} suffix="M" text="Total Fund Raised" />
            <FunFactItem number={120} text="Happy Volunteers" />
            <FunFactItem number={15} text="Years of Fund Raising" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharityFunFactSection;