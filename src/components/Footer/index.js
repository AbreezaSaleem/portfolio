import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <a href="#home" className="scroll-up"><FontAwesomeIcon icon={faAngleDoubleUp} size="2x" /></a>
        <div className="footer-icons-container">
          <div><FontAwesomeIcon icon={faLinkedinIn} /></div>
          <div><FontAwesomeIcon icon={faGithub} /></div>
          <div><FontAwesomeIcon icon={faTwitter} /></div>
        </div>
        <p>Abreeza Saleem @2020</p>
      </div>
    </div>
  );
}

export default Footer;