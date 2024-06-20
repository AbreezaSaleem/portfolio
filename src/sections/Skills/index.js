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
          <p className="skills-title-color">
          For web applications, I primarily utilize JavaScript, leveraging React for front-end development and Node.js for back-end services.
          My deep understanding of JavaScript's core principles has consistently driven successful project outcomes.
          Additionally, I have built a <a href="https://drive.google.com/file/d/18J9VRjPw1XwjtJjWoa85-35M2Agh4icm/view" target="_blank">compiler from scratch</a> using C, demonstrating my expertise in low-level programming and compiler design.
          I have also contributed to open source by publishing an <a href="https://www.npmjs.com/package/react-voice-recorder-player">npm package</a> for a voice recording React component.
          </p>
        </div>
        <div className="skills-list">
          <h4>Frequently Used</h4>
          <div className="skills-data">
            <span className="turquoise">Typescript</span>
            <span className="turquoise">Node.js</span>
            <span className="green">React/React-Native</span>
            <span className="red">HTML/CSS</span>
            <span className="red">AWS</span>
          </div>
          <div className="other-skills-container">
            <div className="other-skills">
              <h4>Others</h4>
              <ul>
                <li>Python</li>
                <li>C++</li>
                <li>Cypress</li>
                <li>NextJS</li>
                <li>MongoDB</li>
                <li>ElasticSearch</li>
                <li>Redis</li>
              </ul>
            </div>
            <div className="tools">
              <h4>Tools</h4>
              <ul>
                <li>Git</li>
                <li>Postman</li>
                <li>Redux Devtool</li>
                <li>React Profiler</li>
                <li>PM2</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
