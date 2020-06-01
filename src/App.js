import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import FloatingButton from './components/FloatingButton';
import Intro from './sections/Intro';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

import { isElementInViewport } from './utils';

AOS.init({ once: true });

function App() {
  useEffect(() => {
    const scroll = window.requestAnimationFrame ||
      function(callback){ window.setTimeout(callback, 1000/60)};

    const elementsToShow = document.querySelectorAll('.show-on-scroll');

    function loop() {
      elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('is-visible');
        }
      });
      scroll(loop);
    }

    loop();

    return (()=> {
      window.cancelAnimationFrame();
    })
  }, [])

  return (
    <>
    <FloatingButton />
    <div>
      <Intro />
      <Skills />
      <Projects />
    </div>
    </>
  );
}

export default App;
