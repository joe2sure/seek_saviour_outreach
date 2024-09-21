import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/components/AboutUs/CoreValues.css';

export const CoreValues = () => {
  const values = [
    "We demonstrate the love of God through words of affirmation, giving of gifts, visiting the vulnerable and offering scholarships to those who cannot afford basic education in Africa.",
    "To obey the word of God and the constitution of any nation in which we find ourselves.",
    "We live a lifestyle that reflects Christ-likeness in our words, thoughts, and actions.",
    "Excellence is our watchword. The quality of being outstanding in all that we do so as to glorify Jesus."
  ];

  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="core-values"
    >
      <h2>Our Core Values and Culture</h2>
      <ol>
        {values.map((value, index) => (
          <motion.li
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            {value}
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
};

export default CoreValues;
