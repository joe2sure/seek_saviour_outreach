import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/components/AboutUs/MissionVision.css';

const MissionVision = () => {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mission-vision"
    >
      <div className="mission">
        <h2>Our Mission</h2>
        <p>
          To reach out to Souls, develop people into Christ's likeness and manifest his love on Earth
        </p>
      </div>
      <div className="vision">
        <h2>Our Vision</h2>
        <p>
          To raise champions for Jesus that will impact the world
        </p>
      </div>
    </motion.section>
  );
};

export default MissionVision;