import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/components/AboutUs/ChurchHistory.css';

const ChurchHistory = () => {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="church-history"
    >
      <h2>Church History</h2>
      <p>
        This ministry is called to teach God's word, build people into positions of leadership and then manifest the powers of God. This is based on the word of God that came again to the Senior pastor "I want you to raise disciple-leaders that would function within the context of the Scripture, principles and presence all around the world". (Math 28:18-20) This is our mandate and our passion. It has been our pursuit as a church since inception.
      </p>
      <p>
        In September 2023, after the man of God waited on God for 7 days fasting with prayer, he received the name SEEK THE SAVIOUR GOSPEL OUTREACH. God commanded him to raise sons and daughters that will preach the gospel in every part of the world according to Mark 16:15.
      </p>
    </motion.section>
  );
};

export default ChurchHistory;