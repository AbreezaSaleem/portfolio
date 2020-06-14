import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import FloatingButton from './components/FloatingButton';
import Navbar from './components/Navbar';
import Intro from './sections/Intro';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

import { isElementInViewport, showNavbar } from './utils';

AOS.init({ once: true });

function App() {
  useEffect(() => {

    // * animate element when it comes into view
    const showElemOnScroll = window.requestAnimationFrame ||
      function(callback) { window.setTimeout(callback, 1000/60) };

    const elementsToShow = document.querySelectorAll('.show-on-scroll');

    function loop() {
      elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('is-visible');
        }
      });
      showElemOnScroll(loop);
    }

    loop();


    // * show navbar when user scrolls down
    const showNavbarOnScroll = window.requestAnimationFrame ||
      function(callback) { window.setTimeout(callback, 1000/60) };

    function scrollNavbar() {
      if (showNavbar()) {
        document.getElementsByClassName("topnav-container")[0].style.top = "0";
      } else {
        document.getElementsByClassName("topnav-container")[0].style.top = "-42px";
      }
      showNavbarOnScroll(scrollNavbar);
    }
    
    scrollNavbar();

    return (()=> {
      window.cancelAnimationFrame();
    })
  }, [])

  return (
    <>
    <Navbar />
    <Intro />
    <About />
    <Skills />
    {/* <Projects />  */}
    </>
  );
}

export default App;
