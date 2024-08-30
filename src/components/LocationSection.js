import React, { useEffect, useRef } from 'react';
import styles from '../styles/components/module/LocationSection.module.css';
import LocationImg from '../assets/images/locationImg.jpg';

const LocationsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          } else {
            entry.target.classList.remove(styles.animate);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
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
    <section ref={sectionRef} className={`${styles.locationsSection} ${styles.animatedSection}`}>
      <div className={styles.container}>
        <div className={`${styles.titleColumn} ${styles.animatedElement}`}>
          <h2 className={styles.mainTitle}>Our Location</h2>
          <p className={styles.subtitle}>we would love to see you!</p>
        </div>
        <div className={`${styles.contentColumn} ${styles.animatedElement}`}>
          <img 
            src={LocationImg} 
            alt="Wolverhampton location" 
            className={styles.locationImage}
          />
          <h3 className={styles.locationTitle}>Wolverhampton</h3>
          <div className={styles.infoGrid}>
            <div className={styles.infoColumn}>
              <h4 className={styles.infoTitle}>ADDRESS:</h4>
              <p className={styles.infoText}>17 Victoria Street</p>
              <p className={styles.infoText}>WV1 3NP</p>
            </div>
            <div className={styles.infoColumn}>
              <h4 className={styles.infoTitle}>SERVICE TIME:</h4>
              {/* <p className={styles.infoText}>Saturdays 4pm</p> */}
              <p className={styles.infoText}>Sundays 10am</p>
            </div>
          </div>
          <a href="#" className={styles.directionsLink}>Get Directions</a>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;