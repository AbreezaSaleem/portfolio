import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import FloatingButton from './components/FloatingButton';
import Intro from './sections/Intro';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

AOS.init({ once: true });

function App() {
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
