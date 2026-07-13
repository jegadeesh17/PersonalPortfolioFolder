import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Financial Intelligence Copilot",
      description: "Architected a dual-domain RAG pipeline over RBI/SEBI regulatory PDFs and HDFC annual reports. Engineered vector search using Sentence Transformers and ChromaDB, achieving 90% top-5 retrieval hit rate.",
      tags: ["RAG", "FastAPI", "ChromaDB", "Docker"],
      image: "/projects/financial-copilot.png",
      github: null,
      live: "https://financialintelligencecopilot.streamlit.app/",
      status: "Live on Streamlit"
    },
    {
      title: "Rice Leaf Disease Detection",
      description: "Built a 4-class CNN image classifier using EfficientNetB0 transfer learning achieving 98.66% test accuracy. Integrated Grad-CAM explainability and deployed a FastAPI inference API to GCP Cloud Run.",
      tags: ["Computer Vision", "PyTorch", "GCP Cloud Run", "FastAPI"],
      image: "/projects/rice-disease.png",
      github: "https://github.com/Jegadeesh17",
      live: "https://rice-leaf-api-5obmkzpuaa-el.a.run.app/",
      status: "Live on GCP"
    },
    {
      title: "Customer Support Analytics",
      description: "Designed an ML pipeline over ~200K support tickets. Applied class-imbalance handling and holdout validation. Deployed FastAPI endpoints with PostgreSQL backend and a multi-page Streamlit ops dashboard.",
      tags: ["scikit-learn", "Streamlit", "PostgreSQL", "FastAPI"],
      image: "/projects/support-analytics.png",
      github: "https://github.com/Jegadeesh17",
      live: "https://support-ops-api-242711953247.asia-south1.run.app/app",
      status: "Live on GCP"
    }
  ];

  return (
    <section className="projects container" id="projects">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <p>End-to-end ML deployments — from data pipelines to production APIs.</p>
      </div>
      
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card card" key={index}>
            {/* Preview image */}
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title + ' preview'} className="project-image" />
              <span className="project-status">{project.status}</span>
            </div>

            {/* Card body */}
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Card footer */}
            <div className="project-footer">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link primary-link">
                  View Live App
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link ghost-link">
                  GitHub
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
