import React from 'react';

const Intro = props => {
  const viewSkills = event => {
    event.preventDefault();
    document.getElementById("skills").scrollIntoView();
  }

  return (
    <div id="home" className="intro-container">
      <div className="image">
        <div className="intro-content">
          <h3>Abreeza Saleem</h3>
           <div className="divider" />
          <h2>Software Engineer</h2>
        </div>
      </div>
    </div>
  );
}

export default Intro;