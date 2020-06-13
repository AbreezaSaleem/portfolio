import React from 'react';

import ProjectTile from './ProjectTile';

import projects from './data';

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div className="title title-color" data-aos="fade-right" data-aos-duration="600">Projects</div>
      <div data-aos="fade-right" data-aos-duration="900" className="introduction">
        <p className="title-color" style={{"marginTop": -20}}>I have worked mainly in front-end but I am transitioning to backend as well to become a fullstack developer.</p>
      </div>
      
      <div className="projects-list show-on-scroll">
          <div className="timeline">
            {projects.map((project, index) => {
              return <ProjectTile key={`project-${index}`} project={project} />
            })}
          </div>
      </div>
    </div>
  );
}

export default Projects;