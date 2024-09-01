import React, { useState, useEffect } from 'react';
import '../styles/components/Navbar.css';
import { Link, useLocation } from 'react-router-dom';

import facebookIcon from '../assets/icons/facebook.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import searchIcon from '../assets/icons/search.svg';
import churchLogo from '../assets/svg/church_logo.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', href: '/' },
    {
      label: 'Charity',
      href: '#',
      subLinks: [
        { label: 'View All', href: '/charity' },
        { label: 'Kids', href: '#' },
        { label: 'Leadership', href: '#' },
        { label: 'Life Groups', href: '#' },
      ],
    },
    { label: 'Pages', href: '#', subLinks: ['About Us', 'Blog', 'Contacts', 'Shop'] },
    { label: 'Sermons', href: '#', subLinks: ['View All', 'Humility in Prayer', 'Jesus Came to bring Joy'] },
    { label: 'Campaigns', href: '#', subLinks: ['View All', "Children's Outreach Summer Camp", 'Equipping Church Leaders'] },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (index) => {
    if (navLinks[index].subLinks) {
      setOpenDropdown(openDropdown === index ? null : index);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (isMenuOpen && !e.target.closest('.nav-links') && !e.target.closest('.menu-toggle')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Function to determine if a link is active
  const isActive = (href) => {
    return location.pathname === href;
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={churchLogo} alt="Church Logo" />
      </div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link, index) => (
          <div
            key={index}
            className={`nav-item ${openDropdown === index ? 'open' : ''} ${isActive(link.href) ? 'active' : ''}`}
          >
            {link.subLinks ? (
              <span onClick={() => toggleDropdown(index)}>{link.label}</span>
            ) : (
              <Link to={link.href}>{link.label}</Link>
            )}
            {link.subLinks && (
              <div className="dropdown">
                {link.subLinks.map((subLink, subIndex) =>
                  typeof subLink === 'string' ? (
                    <Link key={subIndex} to="#">
                      {subLink}
                    </Link>
                  ) : (
                    <Link key={subIndex} to={subLink.href || '#'}>
                      {subLink.label}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>
        ))}
        <div className="mobile-social-icons">
          <a href="#" className="icon-link">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="#" className="icon-link">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="#" className="icon-link">
            <img src={searchIcon} alt="Search" />
          </a>
        </div>
        <a href="#" className="give-button mobile-give">
          Give!
        </a>
      </div>
      <div className="social-icons desktop-only">
        <a href="#" className="icon-link">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="#" className="icon-link">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="#" className="icon-link">
          <img src={searchIcon} alt="Search" />
        </a>
        <a href="#" className="give-button">
          Give!
        </a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
