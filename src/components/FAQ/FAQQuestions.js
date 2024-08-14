import React, { useState } from 'react';
import styles from '../../styles/components/module/FAQ/FAQQuestions.module.css';

const faqs = [
  { question: "What are your gatherings like?", answer: "Answer 1" },
  { question: "What happens when I visit?", answer: "Answer 2" },
  { question: "What should I bring?", answer: "Answer 3" },
  { question: "How Should I dress?", answer: "Answer 4" },
  { question: "Can I invite people to come with me?", answer: "Answer 5" },
  { question: "What if we didn't answer your question?", answer: "Answer 6" }
];

const FAQQuestions = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className={styles.faqQuestions}>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div className={styles.faqQuestion}>
            <span>{faq.question}</span>
            <button onClick={() => toggleFAQ(index)}>+</button>
          </div>
          {expandedFAQ === index && <p className={styles.faqAnswer}>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQQuestions;