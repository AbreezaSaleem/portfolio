import React from 'react';

import ProjectTile from './ProjectTile';

import projects from './data';

const Projects = props => {
  return (
    <div className="projects-container">
      <div className="title" data-aos="fade-left" data-aos-duration="600">Projects</div>
      <div className="projects-list show-on-scroll">
        {projects.map((project, index) => {
          return <ProjectTile key={`project-${index}`} project={project} />
        })}
      </div>
    </div>
  );
}

export default Projects;