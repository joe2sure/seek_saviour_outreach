import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/components/AboutUs/WhoWeAre.css';

const WhoWeAre = () => {
  const mandates = [
    "Win souls for Christ",
    "Increase the faith of upcoming believers through teaching and application of God's word",
    "Raise and instruct disciple-leaders after the order of Jesus",
    "Manifest the certainty of things taught in God's word through signs and wonders",
    "Demonstrate Jesus' love and add value to our society"
  ];

  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="who-we-are"
    >
      <h2>Who We Are</h2>
      <p>
        You are welcome to a family where faith produces results through love demonstrations. We are a faith institution with divine mandates to:
      </p>
      <ul>
        {mandates.map((mandate, index) => (
          <motion.li
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            {mandate}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default WhoWeAre