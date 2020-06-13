import React from 'react';

const Intro = props => {
  const viewSkills = event => {
    event.preventDefault();
    document.getElementById("skills").scrollIntoView();
  }

  return (
    <div id="home" className="intro-container">
      <h3>Hi, I am</h3>
      <h1 className="name">ABREEZA SALEEM</h1>
      <h3>A full-stack web developer 🚀</h3>
      <div className="arrow-bounce" />
      <button onClick={viewSkills} className="view-work">View My Work</button>
    </div>
  );
}

export default Intro;