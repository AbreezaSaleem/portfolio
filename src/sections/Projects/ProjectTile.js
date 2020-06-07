import React from 'react';

// ! show dates
const ProjectTile = ({ project }) => {
  const { name, description, link, details=[], tags=[], year } = project;

  const handleClick = event => {
    event.preventDefault();
    window.open(link, "_blank");
  }

  return (
    <>
    <div className="project right">
      <div className="content">
        <div className="project-title-container">
          <h4 className="project-title">{name}</h4>
          <p className="year">{year}</p>
        </div>
        <p className="project-description">{description}</p>
        <ul>{details.map((detail, index) => {
            return <li className="project-detail" key={`detail-${name}-${index}`}>{detail}</li>
        })}</ul>
        <div className="tags-container">
          {tags.map((tag, index) => {
            return <span className="tag" key={`tag-${name}-${index}`}>{tag}</span>
          })}
        </div>
      </div>
    </div>
    {/* <hr className="divider" /> */}
    </>
  );
}

export default ProjectTile;