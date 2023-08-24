import React from 'react';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="wave-wrapper">
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="-100 28 800 28" preserveAspectRatio="none">
          <defs>
            <path id="gentle-wave" d="m -260,44.4 c 40,0 78,-18 117.7,-18 40.3,0 78.3,18 117.3,18 40,0 78,-18 118,-18 40,0 78,18 118,18 l 0,34.5 -701,0 z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="300" y="3" fill="rgba(255, 255, 255, 0.48)" />
            <use xlinkHref="#gentle-wave" x="500" y="1" fill="rgba(255, 255, 255, 0.78)" />
            <use xlinkHref="#gentle-wave" x="100" y="3" fill="rgba(255, 255, 255, 0.68)" />
            <use xlinkHref="#gentle-wave" x="500" y="1" fill="rgba(255, 255, 255, 0.8)" />
          </g>
        </svg>

      </div>
      <footer className="page-footer">
        <p>&copy;  Copyright © 2023 ZapZone Learning.</p>
      </footer>
    </div>
  );
}

export default Footer;
