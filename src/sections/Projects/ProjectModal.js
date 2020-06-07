import React from 'react';

const ProjectModal = ({ project }) => {
  console.log('project', project)
  const { name, details=[], link, tags=[] } = project;

  return (
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalCenterTitle">{name}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {details.map((detail, index) => {
            return <p key={`detail-${name}-${index}`}>{detail}</p>
          })}
          <div className="tags-container">
          {tags.map((tag, index) => {
            return <span className="tag" key={`tag-${name}-${index}`}>{tag}</span>
          })}
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ProjectModal;