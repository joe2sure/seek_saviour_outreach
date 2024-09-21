import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/components/AboutUs/Leaders.css';

const Leaders = () => {
  const leaders = [
    {
      name: "Pastor Emmanuel Onwe",
      title: "Senior Pastor",
      bio: "Pastor Emmanuel Onwe obtained his B.Eng in Electronic Engineering from University of Nigeria Nsukka, later went for Masters in Information/Technology from NOUN and finally obtained another Masters in Data Science/Artificial Intelligence from University of Wolverhampton. He became a born-again Christian in 1989 in Deeper Life Bible Church. On the 17th March 1996, he had a divine encounter with God that changed his entire life."
    },
    {
      name: "Pastor Mrs. Peace Onwe",
      title: "Pastor",
      bio: "Pastor Mrs. Peace Onwe obtained OND in Science Lab Technology and proceeded to the University of Nigeria Nsukka for her BSc in Medical Biochemistry. She became born again in 1998 during a crusade in Lagos and received the power of the Holy Ghost in 2012, the same year she got married."
    }
  ];

  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="leaders"
    >
      <h2>Meet Our Leaders</h2>
      {leaders.map((leader, index) => (
        <motion.div
          key={index}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
          className="leader"
        >
          <h3>{leader.name}</h3>
          <h4>{leader.title}</h4>
          <p>{leader.bio}</p>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Leaders;