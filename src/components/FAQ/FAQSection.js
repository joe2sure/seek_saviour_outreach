import React from 'react';
import FAQContent from './FAQContent';
import FAQQuestions from './FAQQuestions';
import styles from '../../styles/components/module/FAQ/FAQSection.module.css';

const FAQSection = () => {
  return (
    <div className={styles.faqSection}>
      <FAQContent />
      <FAQQuestions />
    </div>
  );
};

export default FAQSection;