import React from 'react';
import styles from '../styles/components/module/ConnectSection.module.css';

const ConnectSection = () => {
  return (
    <section className={styles.connectSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Connect With Us</h2>
        <p className={styles.description}>
          Check out what we've been up to within the church and our community on our social media pages Facebook, Instagram.
        </p>
      </div>
    </section>
  );
};

export default ConnectSection;