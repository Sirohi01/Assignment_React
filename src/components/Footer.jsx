// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} <strong>My Website</strong>. All rights reserved.
        </p>
        <p>
          Built  by <a href="https://your-portfolio.com" target="_blank" rel="noopener noreferrer">ABCD KUMAR</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
