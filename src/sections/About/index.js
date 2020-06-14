import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

import me from '../../images/me.jpeg';

const About = () => {

  return (
    <div id="about" className="about-container">
      <div data-aos="fade-right" data-aos-duration="1500" >
        <div className="title about-title-color">
          <div>About Me</div>
          <div className="divider" />
        </div>
        <div className="introduction">
          <div className="image-container"><img src={me} /></div>
          <p style={{marginTop: -40}} className="about-title-color">I have been in the web development insdustry for two years now in which I've had the opportunity to learn so much. In case this goes in a second line. Because you never know.</p>
          <div className="dot-divider" />
          <p className="education about-title-color">I graduated from <span style={{fontWeight: 600}}>Lahore University of Management Sciences</span> with a Bacheler's in Computer Science in 2018.</p>
        </div>
        <div className="icons-container">
          <a href="https://www.linkedin.com/in/abreezasaleem/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
          <a href="https://twitter.com/AbreezaSaleem" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
          <a href="https://github.com/AbreezaSaleem" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
        </div>
      </div>
    </div>
  );
}

export default About;