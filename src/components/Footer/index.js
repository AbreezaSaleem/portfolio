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
          <a href="https://www.linkedin.com/in/abreezasaleem/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="https://twitter.com/AbreezaSaleem" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://github.com/AbreezaSaleem" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <p>Abreeza Saleem @2020</p>
        <span><a href="https://github.com/AbreezaSaleem/portfolio" target="_blank">Portfolio Codebase</a></span>
      </div>
    </div>
  );
}

export default Footer;