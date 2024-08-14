import React from 'react';
import QuoteCarousel from './QuoteCarousel';
import styles from '../../styles/components/module/FAQ/ImageSection.module.css';

const ImageSection = () => {
  return (
    <div className={styles.imageSection}>
      <QuoteCarousel />
    </div>
  );
};

export default ImageSection;