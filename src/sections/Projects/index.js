import React from 'react';

import data from './data';

const Projects = () => {

  const openProject = link => {
    window.open(link, "_blank");
  }

  return (
    <div id="projects" className="projects-container">
      <div className="title project-title-color" data-aos="fade-right" data-aos-duration="600">
        <div>Work Experiance</div>
        <div className="divider" />
      </div>
      <div className="show-on-scroll projects-list">
        {data.map((project, index) => {
          const { tags=[], link, description, details } = project;
          return (
            <div key={`project-${index}`} className="project project-title-color">
              <div onClick={() => openProject(link)} className="project-title">
                <h5>{project.name}</h5> <span>({project.year})</span>
              </div>
              <div className="tags">
                {tags.map((tag, index) => {
                  return (
                    <span className="tag" key={`tag-${index}`}>{tag}</span>
                  )
                })}
              </div>
              <div className="project-details">
                <p>{description}</p>
                <p>{details}</p>
              </div>
              <div className="secondary-divider" />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Projects;