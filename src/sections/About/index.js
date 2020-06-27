import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import me from '../../images/me.jpeg';

const About = () => {

  return (
    <div id="about" className="about-container">
      <div data-aos="fade-right" data-aos-duration="900" >
        <div className="title about-title-color">
          <div>About Me</div>
          <div className="divider" />
        </div>
        <div className="about-introduction">
          <div className="image-container"><img src={me} /></div>
          <div className="introduction-text">
            <p style={{marginTop: -20}} className="about-title-color">
              Hi, I am Abreeza. I am a fullstack Javascript developer, who has gained most of her knowledge about the language from the book 'You don't know Javascript' by Kyle Simpson. 
              In my spare time I either watch Netflix or
            </p>
            <div className="dot-divider" />
            <p className="education about-title-color">I currently work at <span style={{fontWeight: 600}}>MailMunch</span> as a Fullstack Developer and I graduated from <span style={{fontWeight: 600}}>Lahore University of Management Sciences</span> with a Bacheler's in Computer Science in 2018.</p>
          </div>
        </div>
        <div className="secondary-divider-container">
          <div className="secondary-divider" />
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