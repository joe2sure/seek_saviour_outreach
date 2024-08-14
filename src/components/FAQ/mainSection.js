import React from 'react';
import ImageSection from './ImageSection';
import FAQSection from './FAQSection';
import styles from '../../styles/components/module/FAQ/MainSection.module.css';

const FAQMainSection = () => {
  return (
    <div className={styles.mainSection}>
      <ImageSection />
      <FAQSection />
    </div>
  );
};

export default FAQMainSection;