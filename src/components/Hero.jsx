import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content">
        <div className="hero-text">
          <div className="greeting">Hello, I'm</div>
          <h1>Jegadeesh D</h1>
          <h2 className="role">AI ML Engineer</h2>
          <p className="bio">
            MTech Student with hands-on experience building end-to-end ML, deep learning, and RAG systems.
            Passionate about driving real-world impact through scalable data pipelines and model deployment.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="image-decoration"></div>
          <img src="/profile.jpg" alt="Jegadeesh D" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
