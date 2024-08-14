import React from 'react';
import styles from '../../styles/components/module/FAQ/FAQContent.module.css';

const FAQContent = () => {
  return (
    <div className={styles.faqContent}>
      <h1>FAQ</h1>
      <h2>Find out what to expect</h2>
      <p className={styles.description}>
        Learn more about our values and our story as a church by visiting the about us page.
      </p>
      <button className={styles.aboutUsButton}>About Us</button>
    </div>
  );
};

export default FAQContent;