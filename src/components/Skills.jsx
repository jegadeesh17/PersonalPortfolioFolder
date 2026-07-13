import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Database",
      skills: ["Python", "SQL", "Pandas", "NumPy", "PostgreSQL", "SQLite", "SQLAlchemy", "OpenCV"],
      icon: "💻"
    },
    {
      title: "Machine Learning & DL",
      skills: ["scikit-learn", "XGBoost", "Random Forest", "TF-IDF", "Keras", "TensorFlow", "PyTorch", "CNN", "EfficientNet"],
      icon: "🧠"
    },
    {
      title: "NLP & GenAI",
      skills: ["RAG", "LLM", "Sentence Transformers", "ChromaDB", "Vector DB", "OpenRouter API"],
      icon: "💬"
    },
    {
      title: "Deployment & Tools",
      skills: ["FastAPI", "Streamlit", "Docker", "GCP Cloud Run", "Hugging Face Hub", "GitHub Actions", "pytest", "Git"],
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
