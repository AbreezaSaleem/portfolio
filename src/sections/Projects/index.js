import React, { useState } from 'react';

import ProjectTile from './ProjectTile';
import ProjectModal from './ProjectModal';

import projects from './data';

const Projects = () => {
  const [ activeProject, setActiveProject ] = useState({});

  const openModal = project => {
    setActiveProject(project);
  }

  return (
    <div className="projects-container">
      <ProjectModal project={activeProject} />
      <div className="title" data-aos="fade-left" data-aos-duration="600">Projects</div>
      <div className="projects-list show-on-scroll">
        <div className="timeline">
          {projects.map((project, index) => {
            return <ProjectTile key={`project-${index}`} project={project} openModal={openModal} index={index} />
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;