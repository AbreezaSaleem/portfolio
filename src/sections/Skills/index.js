import React from 'react';

import SkillsBox from './SkillsBox';
import me from '../../images/me.jpeg';

const Skills = () => {

  return (
    <div id="skills" className="skills-container">
      <div data-aos="fade-right" data-aos-duration="1500" >
        <div className="title title-color">
          <div>About</div>
        </div>
        <div className="introduction">
          <div className="image-container"><img src={me} /></div>
          <p className="title-color">I have been in the web development insdustry for two years now in which I've had the opportunity to learn so much. In case this goes in a second line. Because you never know.</p>
        </div>
      </div>
      <SkillsBox />
    </div>
  );
}

export default Skills;