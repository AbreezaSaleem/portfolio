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
            <p className="about-me about-title-color">
            Hi, I am Abreeza. I am a Full-stack software engineer with over four years of industry experience. 
            I work mainly with Javascript as my preferred choice of language and over the past few years, 
            I've successfully aided in building multiple applications (scroll down to learn more 👇🏼).
            </p>
            {/* <div className="dot-divider" />
            <p className="education about-title-color">I am currently working at <a href="https://www.mailmunch.com/" target="_blank">MailMunch</a> as a Fullstack Developer and I graduated from <a href="https://www.lums.edu.pk/" target="_blank">Lahore University of Management Sciences</a> with a Bachelor's in Computer Science in 2018.</p> */}
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
