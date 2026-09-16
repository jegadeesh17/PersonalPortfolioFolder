import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
