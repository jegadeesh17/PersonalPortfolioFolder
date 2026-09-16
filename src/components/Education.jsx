import React from 'react';
import './Education.css';

const coursework = [
  "Data Structures & Algorithms",
  "Software Architecture",
  "Distributed Systems",
  "Database Systems",
  "Machine Learning"
];

const Education = () => {
  return (
    <section className="education container" id="education">
      <div className="section-header">
        <h2>Education</h2>
        <p>Academic foundation behind the engineering.</p>
      </div>

      <div className="education-card card">
        <div className="education-badge">🎓</div>
        <div className="education-body">
          <div className="education-top-row">
            <h3>MTech (Integrated) in Software Engineering</h3>
            <span className="education-duration">Jul 2020 – Sep 2025</span>
          </div>
          <p className="education-institution">Vellore Institute of Technology (VIT), Chennai</p>
          <div className="education-cgpa">CGPA: <strong>7.89 / 10.0</strong></div>
          <div className="education-coursework">
            <span className="coursework-label">Coursework</span>
            <div className="tags">
              {coursework.map((course, i) => (
                <span key={i} className="tag">{course}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
