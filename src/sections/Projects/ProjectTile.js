import React from 'react';

const ProjectTile = ({ project }) => {
  const { name, description, link, tags } = project;

  const handleClick = event => {
    event.preventDefault();
    window.open(link, "_blank");
  }

  return (
    <div className="project">
      <h4 className="project-title">{name}</h4>
      <p className="project-description">{description}</p>
      <div className="overlay">
        <div className="slide-up">
          <div className="tags-container">
            {tags.map((tag, index) => {
              return <span className="tag" key={`tag-${name}-${index}`}>{tag}</span>
            })}
          </div>
          <button className="learn-more-btn" onClick={handleClick}>View</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectTile;