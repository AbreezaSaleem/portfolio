import React from 'react';

const Skills = () => {

  return (
    <div id="skills" className="skills-container">
      <div data-aos="fade-right" data-aos-duration="900" >
        <div className="title skills-title-color">
          <div>Technical Skills</div>
          <div className="divider" />
        </div>
        <div style={{marginTop: 10}} className="skills-introduction">
          <p className="skills-title-color">I've worked with a wide variety of programming languages. For web applications I mainly use Javascript and its popular. Other than that I have worked with C++ and LLVM. I've also used Python in a few projects.</p>
        </div>
        <div className="skills-list">
          <h4>Frequently Used</h4>
          <div className="skills-data">
            <span className="red">HTML</span>
            <span className="blue">CSS/SCSS</span>
            <span className="turquoise">Node.js</span>
            <span className="green">React</span>
            <span className="yellow">GraphQL</span>
            <span className="pink">Sequalize</span>
          </div>
          <div className="other-skills-container">
            <div className="other-skills">
              <h4>Others</h4>
              <ul>
                <li>Python</li>
                <li>C++</li>
                <li>Java</li>
                <li>MongoDB</li>
                <li>Unity-3D</li>
                <li>Matlab</li>
              </ul>
            </div>
            <div className="tools">
              <h4>Tools</h4>
              <ul>
                <li>Git</li>
                <li>Postico</li>
                <li>Postman</li>
                <li>Studio 3T</li>
                <li>LLVM</li>
                <li>Android Studio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;