import React, { useState } from 'react';

const Navbar = () => {
  const [ activeLink, setActiveLink ] = useState();

  return (
    <div className="topnav-container">
      <nav className="topnav">
        <a style={{color: (activeLink === "home" ? "#0276ff" : "#fff")}} onClick={() => setActiveLink('home')} href="#home">Home</a>
        <a style={{color: (activeLink === "skills" ? "#0276ff" : "#fff")}} onClick={() => setActiveLink('skills')} href="#skills">Skills</a>
        <a style={{color: (activeLink === "projects" ? "#0276ff" : "#fff")}} onClick={() => setActiveLink('projects')} href="#projects">Projects</a>
        <a style={{color: (activeLink === "contact" ? "#0276ff" : "#fff")}} onClick={() => setActiveLink('contact')} href="#contact">Contact</a>
      </nav>
    </div>
  );
}

export default Navbar;