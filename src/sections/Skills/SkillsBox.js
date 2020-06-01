import React from 'react';

import skills from './data';

const SkillsBox = () => {

  return (
    <div className="show-on-scroll skills-box">
      {Object.keys(skills).map((skill, index1) => {
        const currentSkill = skills[skill];
        return (
          <div key={`skill-${index1}`} className="skill">
            {currentSkill.logo}
            <div className="skill-title">{currentSkill.title}</div>
            {/* <div className="divider" /> */}
            <div className="skill-details-container">
              <div className="skill-detail-container"><p className="skill-detail">{currentSkill.details}</p></div>
              <div className="skill-detail-container">
                <p className="heading">Tools I Use</p>
                <ul className="skill-detail list comma-list">
                  {currentSkill.tools.map((tool, index2) => <li key={`tools-${index1}-${index2}`}>{tool}</li>)}
                </ul>
              </div>
              <div className="skill-detail-container">
                <p className="heading">Languages I know</p>
                <ul className="skill-detail newline-list skill-ranking list">
                  {Object.keys(currentSkill.languages).map((lang, index3) => {
                    return (
                      <li key={`language-${index1}-${index3}`} className="stars">
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