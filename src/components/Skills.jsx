import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI Systems & Agent Runtimes",
      skills: ["Agent Runtimes", "Tool Calling", "Multi-Agent Systems", "Hybrid RAG", "BM25 Sparse Ranking", "Reciprocal Rank Fusion", "ChromaDB", "Sentence Transformers", "OpenRouter / LLM APIs"],
      icon: "🤖"
    },
    {
      title: "Backend & Systems Infrastructure",
      skills: ["Python (AsyncIO)", "FastAPI", "Pydantic-Settings", "REST APIs", "Docker", "Docker Compose", "PostgreSQL", "SQLite (FTS5)", "Redis", "Uvicorn", "Linux"],
      icon: "⚙️"
    },
    {
      title: "Machine Learning & Computer Vision",
      skills: ["scikit-learn", "PyTorch", "EfficientNetB0", "Transfer Learning", "CNN", "Grad-CAM XAI", "XGBoost", "TF-IDF", "Feature Engineering", "Pandas", "NumPy"],
      icon: "🧠"
    },
    {
      title: "Full-Stack, Testing & Reliability",
      skills: ["TypeScript", "React 18", "Vite", "pytest (262+ Tests)", "pytest-asyncio", "Evaluator Calibration", "Streamlit", "Git", "GitHub Actions", "GCP Cloud Run"],
      icon: "🚀"
    }
  ];

  return (
    <section className="skills container" id="skills">
      <div className="section-header">
        <h2>Technical Arsenal</h2>
        <p>Tools and technologies I use to build scalable ML solutions.</p>
      </div>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card card" key={index}>
            <div className="skill-header">
              <span className="skill-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="tags">
              {category.skills.map((skill, i) => (
                <span key={i} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
