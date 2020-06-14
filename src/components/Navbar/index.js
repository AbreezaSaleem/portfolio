import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [ activeLink, setActiveLink ] = useState();
  const navEl = useRef(null);

  const handleActiveLink = value => {
    setActiveLink(value);
    const element = navEl.current;
    element.className = "navbar-links";
  }

  const expandNavbar = event => {
    event.preventDefault();
    const element = navEl.current;
    if (element.className === "navbar-links") {
      element.className += " slidedown";
    } else {
      element.className = "navbar-links";
    }
  }

  return (
    <div id="navbar" className="topnav-container">
      <nav className="topnav">
        <div className="icon">
          <a onClick={expandNavbar}><FontAwesomeIcon icon={faBars} /></a>
        </div>
        <div ref={navEl} className="navbar-links">
          <a onClick={() => handleActiveLink('home')} href="#home">Home</a>
          <a onClick={() => handleActiveLink('about')} href="#about">About</a>
          <a onClick={() => handleActiveLink('skills')} href="#skills">Skills</a>
          <a onClick={() => handleActiveLink('projects')} href="#projects">Projects</a>
          <a onClick={() => handleActiveLink('contact')} href="#contact">Contact</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;