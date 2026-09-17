import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content">
        <div className="hero-text">
          <div className="greeting">Hello, I'm</div>
          <h1>Jegadeesh D</h1>
          <h2 className="role">Software Engineer · AI Systems, RAG & Agents</h2>
          <p className="bio">
            Software Engineer specializing in deployed agent runtimes, hybrid RAG pipelines, and ML inference microservices using Python, FastAPI, TypeScript, React 18, and PostgreSQL/SQLite. Focused on deterministic schemas, test-driven engineering (262+ automated pytest tests), and calibrated evaluation benchmarks.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value">262+</span>
              <span className="stat-label">Automated Tests Passing</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">100%</span>
              <span className="stat-label">Tool Execution Reliability</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">0.550</span>
              <span className="stat-label">RAG Retrieval MRR</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">14</span>
              <span className="stat-label">Engineered Systems</span>
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

