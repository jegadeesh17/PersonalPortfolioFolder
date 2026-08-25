import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content">
        <div className="hero-text">
          <div className="greeting">Hello, I'm</div>
          <h1>Jegadeesh D</h1>
          <h2 className="role">AI / ML Engineer</h2>
          <p className="bio">
            Engineer with hands-on experience building end-to-end ML, deep learning, and RAG systems.
            Delivered production-grade projects across NLP, computer vision, and GenAI with FastAPI, Docker, GCP Cloud Run, and measurable benchmarks.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">3+</span>
              <span className="stat-label">Production Deployments</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">98.66%</span>
              <span className="stat-label">CV Test Accuracy</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">90%</span>
              <span className="stat-label">RAG Top-5 Hit Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">14</span>
              <span className="stat-label">Engineered Projects</span>
            </div>
          </div>

          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">
              View All Projects
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume (V3)
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

