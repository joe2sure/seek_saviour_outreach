import React from 'react';
import styles from '../styles/components/module/Footer.module.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import churchLogo  from '../assets/svg/church_logo.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.column}>
          <img src={churchLogo} alt="Seek Saviour gospel outreach" className={styles.logo} />
          <h3 className={styles.columnTitle}>Contact</h3>
          <p className={styles.contactInfo}>Enquiries:  +447405733120</p>
          <p className={styles.contactInfo}>seeksaviour.outreach@gmail.com</p>
          <div className={styles.socialIcons}>
            <FaFacebookF className={styles.icon} />
            <FaInstagram className={styles.icon} />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.emptySpace}></div>
          <h3 className={styles.columnTitle}>Location</h3>
          <p className={styles.locationInfo}>Seek Saviour Gospel Outreach</p>
          <p className={styles.locationInfo}>WV1 3NP</p>
          <p className={styles.locationInfo}>17 Victoria Street WV1 3NP </p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Stay Connected</h3>
          <p className={styles.stayConnectedInfo}>
            Sign up with your email address to receive updates from Seek Saviour Gospel Outreach
          </p>
          <input type="email" placeholder="Email*" className={styles.emailInput} />
          <button className={styles.signUpButton}>Sign Up</button>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <nav className={styles.footerNav}>
          <a href="/" className={`${styles.footerLink} ${styles.active}`}>Home</a>
          <a href="/about" className={styles.footerLink}>About Us</a>
          <a href="/contact" className={styles.footerLink}>Contacts</a>
          <a href="/blog" className={styles.footerLink}>Blog</a>
        </nav>
        <p className={styles.copyright}>
          joeConcept@2024 - All Rights Reserved (Joe2sure@gmail.com)
        </p>
      </div>
    </footer>
  );
};

export default Footer;