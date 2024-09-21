import React from 'react';
import { motion } from 'framer-motion';

import '../styles/pages/AboutUs.css';
import { Footer, Navbar } from '../components';
import { ChurchHistory, CoreValues, Leaders, MissionVision, WelcomeNote, WhoWeAre } from '../components/AboutUs';

const AboutUs = () => {
  return (
    <div className="about-us">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="about-us-content"
      >
        <h1>About Us</h1>
        {/* <WelcomeNote /> */}
        <WhoWeAre />
        <MissionVision />
        <CoreValues />
        <ChurchHistory />
        <Leaders />
      </motion.main>
    </div>
  );
};

export default AboutUs;