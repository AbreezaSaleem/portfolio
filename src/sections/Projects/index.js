import React from 'react';

import data from './data';

const Projects = () => {

  return (
    <div id="projects" className="projects-container">
      <div className="title project-title-color" data-aos="fade-right" data-aos-duration="600">
        <div>Work Experiance</div>
        <div className="divider" />
      </div>
      <div className="show-on-scroll projects-list">
        {data.map((project, index) => {
          const { tags=[], description, details=[] } = project;
          return (
            <div key={`project-${index}`} className="project project-title-color">
              <div className="project-title"><h5>{project.name}</h5> <span>({project.year})</span></div>
              <div className="tags">
                {tags.map((tag, index) => {
                  return (
                    <span className="tag" key={`tag-${index}`}>{tag}</span>
                  )
                })}
              </div>
              <p className="project-description">{description}</p>
              {/* <button className="view-more-btn">View More</button> */}
              <ul className="project-detail">{details.map((detail, index) => {
                return <li key={`detail-${index}`}>{detail}</li>
              })}</ul>
              <div className="secondary-divider" />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Projects;