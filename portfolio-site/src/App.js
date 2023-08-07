import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Tech from "./Components/Tech";
import Education from "./Components/Education";
import Feedbacks from "./Components/Feedbacks";
import Contact from "./Components/Contact";
import StarsCanvas from "./Components/StarsCanvas";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Projects />
        <Tech />
        <Education />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
