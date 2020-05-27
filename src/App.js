import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Intro from './sections/Intro';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

AOS.init();

function App() {
  return (
    <div>
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
