import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative -z-1 bg-off-white'>
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Projects />
        <Education />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
