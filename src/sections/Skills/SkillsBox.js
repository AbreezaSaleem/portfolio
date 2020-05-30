import React from 'react';

import skills from './data';

const SkillsBox = () => {

  return (
    <div data-aos="flip-left" className="skills-box">
      {Object.keys(skills).map(skill => {
        const currentSkill = skills[skill];
        return (
          <div className="skill">
            {currentSkill.logo}
            <div className="skill-title">{currentSkill.title}</div>
            {/* <div className="divider" /> */}
            <div className="skill-details-container">
              <div className="skill-detail-container"><p className="skill-detail">{currentSkill.details}</p></div>
              <div className="skill-detail-container">
                <p className="heading">Tools I Use</p>
                <ul className="skill-detail list comma-list">
                  {currentSkill.tools.map(tool => <li>{tool}</li>)}
                </ul>
              </div>
              <div className="skill-detail-container">
                <p className="heading">Languages I know</p>
                <ul className="skill-detail newline-list skill-ranking list">
                  {Object.keys(currentSkill.languages).map(lang => {
                    return (
                      <li className="stars">
                        {lang}
                        <span>{currentSkill.languages[lang]}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default SkillsBox;