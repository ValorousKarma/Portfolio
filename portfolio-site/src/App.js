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
      <div className='relative z-0 bg-off-white'>
        <div className='bg-off-white bg-bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Projects />
        <Education />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
