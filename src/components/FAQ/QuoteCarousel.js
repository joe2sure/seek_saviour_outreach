import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from '../../styles/components//module/FAQ/QuoteCarousel.module.css';

const quotes = [
  {
    text: "You my brothers, were called to be free, but do not use your freedom to indulge the sinful nature; rather serve one another in love. We are not saved by serving, but we are saved for serving.",
    author: "Pst O.U Emmanuel"
  },
  {
    text: "True freedom lies not in the pursuit of our own desires, but in the commitment to love and serve others. Our journey of faith is not about earning grace, but about living out the grace we've received through acts of service.",
    author: "Pst O.U Emmanuel"
  },
  {
    text: "Freedom is a gift, not to be used for self-indulgence, but as an opportunity to show love through serving others. Our acts of service are not the means to salvation, but they are the natural expression of a heart that has been saved",
    author: "Pst Mrs O. Peace"
  }
];

const QuoteCarousel = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const changeQuote = useCallback((direction) => {
    setCurrentQuote((prev) => (prev + direction + quotes.length) % quotes.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      changeQuote(1);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval);
  }, [changeQuote]);

  return (
    <div className={styles.quoteCarousel}>
      <button 
        className={`${styles.carouselButton} ${styles.left}`} 
        onClick={() => changeQuote(-1)}
        aria-label="Previous quote"
      >
        <FaChevronLeft />
      </button>
      <div className={styles.quoteContent}>
        <p>{quotes[currentQuote].text}</p>
        <p className={styles.author}>{quotes[currentQuote].author}</p>
      </div>
      <button 
        className={`${styles.carouselButton} ${styles.right}`} 
        onClick={() => changeQuote(1)}
        aria-label="Next quote"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default QuoteCarousel;