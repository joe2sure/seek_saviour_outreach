import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/components/AboutUs/WelcomeNote.css';

const WelcomeNote = () => {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="welcome-note"
    >
      <h2>Welcome to our family of love!</h2>
      <p>
        It is a pleasure to have you here. We hope you have a wonderful experience and look forward to seeing you at one of our services.
      </p>
      <p>
        Come and experience the love of Christ and its transformation effects in your life during our Sunday Salvation Service and Wednesday Bible Study.
      </p>
    </motion.section>
  );
};

export default WelcomeNote;