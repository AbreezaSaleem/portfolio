import React from 'react';

// ! show dates
const ProjectTile = ({ project, openModal, index }) => {
  const { name, description, link } = project;
  const alignment = !(index % 2) ? "left" : "right"; 

  const handleClick = event => {
    event.preventDefault();
    window.open(link, "_blank");
  }

  const handleOpenModal = event => {
    event.preventDefault();
    openModal(project);
  }

  return (
    <>
    <div className={`project ${alignment}`}>
      <div className="content">
        <h4 className="project-title">{name}</h4>
        <p className="project-description">{description}</p>
        <button
          type="button"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          className="learn-more-btn"
          onClick={handleOpenModal}>
          Learn More
        </button>
      </div>
    </div>
    </>
  );
}

export default ProjectTile;